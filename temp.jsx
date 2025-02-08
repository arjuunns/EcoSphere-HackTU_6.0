import { useState } from "react";

export default function RecyclingPredictor() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [prediction, setPrediction] = useState(null);
    const [loading, setLoading] = useState(false);
    
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            alert("Please select a file first");
            return;
        }

        const formData = new FormData();
        formData.append("file", selectedFile);

        setLoading(true);
        const response = await fetch("http://localhost:5173/ai_predictor", {
            method: "POST",
            body: formData,
        });
        
        const data = await response.json();
        setPrediction(data);
        setLoading(false);
    };

    return (
        <div className="flex flex-col items-center p-6 bg-gray-900 text-white min-h-screen">
            <h1 className="text-3xl font-bold text-green-400 mb-6">AI-Powered Recycling Predictor</h1>
            <div className="p-4 bg-gray-800 rounded-xl border-2 border-dashed border-green-500 flex flex-col items-center">
                <input type="file" onChange={handleFileChange} className="mb-4 text-white" />
                <button onClick={handleUpload} className="bg-green-500 px-6 py-2 rounded-lg text-black font-bold hover:bg-green-600">
                    Upload Image
                </button>
            </div>
            {loading && <p className="mt-4 text-green-400">Processing...</p>}
            {prediction && (
                <div className="mt-6 p-4 bg-gray-800 rounded-lg text-center border border-green-400">
                    <h2 className="text-2xl font-bold text-green-400">Prediction Result</h2>
                    <p className="mt-2">Item Type: <span className="font-semibold">{prediction.class}</span></p>
                    <p>Estimated Price: <span className="font-semibold">${prediction.price_per_kg} per kg</span></p>
                    <p className="mt-2 text-green-300">{prediction.message}</p>
                </div>
            )}
        </div>
    );
}