
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // In a real app, you'd want to handle this more gracefully.
  console.error("Gemini API key not found in environment variables.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

const resumeSummary = `Cybersecurity Analyst with 6 years of experience in threat analysis, incident response, and security compliance. Demonstrates expertise in managing complex IT environments, utilizing skills in PKI, SIEM, and network security to enhance system reliability and minimize risks. Adept at leveraging advanced threat detection techniques and scripting languages like Python to drive operational efficiency and safeguard data integrity.`;

const professionalSummaryPrompt = `
Based on the following professional summary, rewrite it to be even more impactful and concise for a top-tier tech resume. Keep it between 50-70 words. Emphasize action and results, using a strong, professional tone.

Original Summary:
"${resumeSummary}"
`;

export const generateBio = async (): Promise<string> => {
  if (!API_KEY) {
    return Promise.resolve("API Key not configured. Please add your Gemini API Key to the environment variables.");
  }
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: professionalSummaryPrompt,
      config: {
        temperature: 0.7,
        topP: 1,
        topK: 1,
        maxOutputTokens: 150,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Error generating bio with Gemini:", error);
    return "Failed to generate AI summary. Please check the console for more details.";
  }
};
