const express = require("express");
const cors = require("cors");
const { SerialPort } = require("serialport");
const { ReadlineParser } = require("@serialport/parser-readline");
const axios = require("axios");
const http = require("http");
const { Server } = require("socket.io");

// 🌍 Server Configuration
const PORT = 3000;
const ARDUINO_PORT = "COM3"; // Change for Linux (e.g., "/dev/ttyUSB0")
const BAUD_RATE = 9600;

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// 🔄 Global Data Storage
let latestDistance = "No data received yet";
const ROHINI_LAT = 28.7361;
const ROHINI_LON = 77.0825;

// 🚀 API Endpoint: Receive Data (POST)
app.post("/data", (req, res) => {
    try {
        const { distance, latitude, longitude } = req.body;
        if (!distance || !latitude || !longitude) {
            return res.status(400).json({ status: "error", message: "Incomplete data received" });
        }

        latestDistance = `${distance} cm | Location: (${latitude}, ${longitude})`;
        console.log(`📩 Received Distance: ${latestDistance}`);

        // 🔄 Broadcast to all connected clients (Auto-Reload)
        io.emit("updateData", { distance, latitude, longitude });

        res.status(200).json({
            status: "success",
            distance,
            latitude,
            longitude,
        });
    } catch (error) {
        console.error(`❌ Server Error: ${error.message}`);
        res.status(500).json({ status: "error", message: error.message });
    }
});

// 🔍 API Endpoint: Fetch Latest Data (GET)
app.get("/data", (req, res) => {
    res.json({
        status: "success",
        distance: latestDistance,
        latitude: ROHINI_LAT,
        longitude: ROHINI_LON,
    });
});

// 🌐 Serve a WebSocket-based HTML Page for Live Updates
app.get("/", (req, res) => {
    res.send(`
        <html>
        <head>
            <script src="https://cdn.socket.io/4.4.1/socket.io.min.js"></script>
            <script>
                const socket = io("http://127.0.0.1:${PORT}");
                socket.on("updateData", (data) => {
                    document.getElementById("distance").innerText = data.distance + " cm";
                    document.getElementById("location").innerText = "Location: (" + data.latitude + ", " + data.longitude + ")";
                });
            </script>
        </head>
        <body>
            <h1>Real-Time Distance Monitoring</h1>
            <h2 id="distance">${latestDistance}</h2>
            <h3 id="location">Location: (${ROHINI_LAT}, ${ROHINI_LON})</h3>
        </body>
        </html>
    `);
});

// 🎬 Start Express & WebSocket Server
server.listen(PORT, () => {
    console.log(`🚀 Server running at http://127.0.0.1:${PORT}`);
});

// 🔌 Function to Read Data from Arduino Serial Port
function readSerialData() {
    try {
        const serialPort = new SerialPort({ path: ARDUINO_PORT, baudRate: BAUD_RATE });
        const parser = serialPort.pipe(new ReadlineParser({ delimiter: "\n" }));

        serialPort.on("open", () => {
            console.log(`🔌 Connected to Arduino on ${ARDUINO_PORT} at ${BAUD_RATE} baud`);
        });

        parser.on("data", async (data) => {
            data = data.trim();
            if (!data) return;

            latestDistance = `${data} cm | Location: (${ROHINI_LAT}, ${ROHINI_LON})`;
            console.log(`📡 Sending Distance: ${latestDistance}`);

            try {
                const response = await axios.post("http://127.0.0.1:3000/data", {
                    distance: data,
                    latitude: ROHINI_LAT,
                    longitude: ROHINI_LON,
                });

                console.log(`✅ Server Response: ${response.data.status}`);
            } catch (httpError) {
                console.error(`❌ HTTP Request Error: ${httpError.message}`);
            }
        });

        serialPort.on("error", (err) => {
            console.error(`❌ Serial Port Error: ${err.message}`);
            setTimeout(readSerialData, 5000);
        });
    } catch (error) {
        console.error(`⚠ Error Opening Serial Port: ${error.message}`);
        setTimeout(readSerialData, 5000);
    }
}

// 📡 Start Serial Port Listener
readSerialData();
