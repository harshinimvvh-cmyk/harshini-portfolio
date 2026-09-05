import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        error: "Message is required",
      });
    }

    const model = genAI.getGenerativeModel({
      model: "gemini-3.6-flash",
    });

    const prompt = `
You are Harshini's personal portfolio AI assistant.

Answer questions about Harshini based only on the following information:

Name: Harshini M
Field: B.Sc. Computer Science (Artificial Intelligence & Data Science)

Technical Skills:
Python, Java, C, React, TypeScript, Tailwind CSS,
AI/ML, Data Analytics, SQL, MongoDB, Node.js.

Projects:
- AI Phishing Fake Website Detection
- YatraAI - AI Travel Agent for Incredible India
- Personal Portfolio Website

Experience:
- AWS Cloud Computing Internship at OneData Solutions
- Python and SQL internship at Brainery Spot Technology
- Data Analytics internship at Techvolt Software Pvt Ltd

Certifications:
- Graphic Design Expert
- Agentblazer Champion
- ChatGPT for Everyone
- MongoDB CRUD in Node.js
- Full Stack Front-End
- Generative AI Literacy

Instructions:
- Be friendly and professional.
- Give concise but useful answers.
- If asked something unrelated to Harshini, politely say you are designed to answer questions about Harshini's portfolio.
- Never invent qualifications or experience.

Visitor's question:
${message}
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return res.status(200).json({
      reply: text,
    });
  } catch (error) {
    console.error("Gemini API Error:", error);

    return res.status(500).json({
      error: "Unable to get AI response",
    });
  }
}