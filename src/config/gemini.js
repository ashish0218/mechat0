


/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 *
 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
 */

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  }  from"@google/generative-ai";

  
  // const apiKey = "AIzaSyCPredhZeMVu19b1LwQzGMCDqsImu7l3m";
  const apiKey = "AIzaSyDdWFBmiupmU-XfdvSTO1zsmkS5d7Mybf8";
  // AIzaSyDdWFBmiupmU-XfdvSTO1zsmkS5d7Mybf8
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  // const prompt = "What is react";
  async function run(prompt) {
    // console.log(prompt);
    const chatSession = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
      ],
    });
  
    const result = await chatSession.sendMessage(prompt);
    console.log(result.response.text());
    return result.response.text();
  }
  
  export default run;