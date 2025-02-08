// import { GoogleGenerativeAI } from "@google/generative-ai";

// async function generateAIContent(imageFile, promptText, setOutputText) {
//   const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_KEY);
//   const model = genAI.getGenerativeModel({ model: "gemini-2.0-vision" });

//   try {
//     // Convert image file to Base64
//     const base64Image = await toBase64(imageFile);
    
//     const result = await model.generateContent([
//       { type: "text", text: promptText },
//       { type: "image", data: base64Image }
//     ]);

//     const responseText = result.response.text();
//     setOutputText(responseText);
//   } catch (error) {
//     console.error("Error generating content:", error);
//   }
// }

// // Helper function to convert image file to Base64
// function toBase64(file) {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => resolve(reader.result.split(",")[1]); // Get Base64 data
//     reader.onerror = error => reject(error);
//   });
// }

// export default generateAIContent;
