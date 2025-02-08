import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "YOUR_GEMINI_API_KEY";

const ImageAnalyzer = () => {
  const [image, setImage] = useState(null);
  const [analysisResult, setAnalysisResult] = useState({});
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setAnalysisResult({}); // Clear previous results on new upload
    }
  };

  const analyzeImage = async () => {
    if (!image) {
      alert("Please upload an image first!");
      return;
    }

    setLoading(true);
    const reader = new FileReader();

    reader.onloadend = async () => {
      const base64Image = reader.result.split(",")[1];

      try {
        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

        const result = await model.generateContent([
          {
            text: `Analyze this image and extract details about its recyclability. Provide a structured JSON response **without markdown formatting** with these fields:
            {
              "material": "Material type",
              "price": "Estimated price you can get after submitting to recycling , show the cost in Indian rupees with unit as Rs/Kg",
              "ideas": ["Give 2-3 very good reuse ideas in concise bullet points"],
              "ways": "Ways to recycle"
            }
            Return only valid JSON, no extra text.`,
          },
          {
            inlineData: { mimeType: "image/jpeg", data: base64Image },
          },
        ]);

        let responseText = await result.response.text();

        // ✅ Remove Markdown formatting if present
        responseText = responseText.replace(/```json|```/g, "").trim();

        // ✅ Parse the cleaned JSON response
        const parsedResult = JSON.parse(responseText);
        setAnalysisResult(parsedResult);
      } catch (error) {
        console.error("Error analyzing image:", error.message);
      } finally {
        setLoading(false);
      }
    };

    reader.readAsDataURL(image);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-100 to-green-300 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-4">
          ♻️ Recyclability Analyzer
        </h2>

        <label className="block w-full cursor-pointer">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
          <div className="border-2 border-dashed border-green-600 p-6 rounded-lg hover:bg-green-50 transition">
            {image ? (
              <img
                src={URL.createObjectURL(image)}
                alt="Uploaded"
                className="w-full h-48 object-cover rounded-lg mx-auto"
              />
            ) : (
              <p className="text-green-700 font-medium">📸 Click to Upload Image</p>
            )}
          </div>
        </label>

        <button
          onClick={analyzeImage}
          disabled={loading}
          className="w-full bg-green-700 text-white mt-4 py-2 rounded-lg hover:bg-green-800 transition-all disabled:bg-gray-400"
        >
          {loading ? "Analyzing..." : "Analyze Image"}
        </button>

        {loading && (
          <div className="mt-4">
            <div className="w-6 h-6 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="text-gray-600 mt-2">Processing...</p>
          </div>
        )}

        {analysisResult.material && (
          <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-600 text-left rounded-lg">
            <h3 className="text-lg font-semibold text-green-700 mb-2">♻️ Analysis Result:</h3>
            <ul className="text-gray-800 space-y-2">
              <li><strong>🛠 Material:</strong> {analysisResult.material}</li>
              <li><strong>💰 Price:</strong> {analysisResult.price}</li>
              <li><strong>🧠 Ideas to Reuse:</strong>
                <ul className="list-disc list-inside ml-4">
                  {analysisResult.ideas && analysisResult.ideas.map((idea, index) => (
                    <li key={index}> {idea}</li>
                  ))}
                </ul>
              </li>
              <li><strong>🔄 Ways to Recycle:</strong> {analysisResult.ways}</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageAnalyzer;
