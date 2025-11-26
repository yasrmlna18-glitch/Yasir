import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateHypeMessage = async (userPrompt: string): Promise<string> => {
  if (!apiKey) {
    return "API Key missing. Cannot generate hype!";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userPrompt,
      config: {
        systemInstruction: `You are 'Coach Neon', a high-energy, motivational basketball coach for the UIN Salatiga Basketball team. 
        Your tone is aggressive but positive, full of slang, exclamation marks, and energy.
        You are speaking to attendees of the 'UIN Salatiga Basketball' festival.
        Keep responses under 50 words. Use emojis like 🏀, 🔥, 🎵.`,
        temperature: 0.9,
      }
    });

    return response.text || "Let's go!! (AI temporarily benched)";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The energy is too high! (Error connecting to Coach)";
  }
};