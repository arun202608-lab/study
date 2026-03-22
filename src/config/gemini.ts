import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyCTssa6kACvGcB23s6hombG6LmvHLuyMGk";
const genAI = new GoogleGenerativeAI(API_KEY);

export const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

// Streaming version for real-time chatbot
export const generateResponseStream = async (prompt: string, context: string = "", onChunk: (text: string) => void) => {
  try {
    const fullPrompt = `You are Eduzy Assistant, an AI learning companion for the Eduzy e-learning platform. 
    Context: ${context}
    
    User question: ${prompt}
    
    Please provide a helpful, encouraging, and course-relevant response. Keep it concise but informative.`;

    // Use the Gemini API streaming method if available
    if (model.generateContentStream) {
      const streamResult = await model.generateContentStream({ contents: [{ role: "user", parts: [{ text: fullPrompt }] }] });
      for await (const chunk of streamResult.stream) {
        // chunk.candidates[0].content.parts[0].text is the streamed text
        const text = chunk?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text) {
          onChunk(text);
        }
      }
    } else {
      // Fallback: not streaming, just return all at once
      const result = await model.generateContent(fullPrompt);
      const response = await result.response;
      onChunk(response.text());
    }
  } catch (error) {
    console.error('Gemini API Error:', error);
    onChunk("I'm sorry, I'm having trouble connecting right now. Please try again in a moment!");
  }
};