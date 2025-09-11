import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;
    const apiKey = process.env.GROQ_API_KEY;

    if (!message) return res.status(400).json({ error: "No message provided" });
    if (!apiKey) return res.status(500).json({ error: "API key missing" });

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [
          {
            role: "system",
            content: `You are Sora, a cool AI Female assistant created by Anil Kumar.
            Introduce yourself as "Sora, your AI assistant powered by Anil Kumar" when asked "Who are you?".
            Always act professional, helpful, and futuristic.
            Anil Kumar is a MERN stack developer with expertise in React, Node.js, Express, and MongoDB.
            Frontend Development: He creates responsive and user-friendly web interfaces using React, HTML, CSS, and JavaScript.
            Graphic Design: He designs visually appealing graphics and layouts using tools like Figma and Canva.
            He also built an AI-powered chatbot using Groq API and React.
            He builds full-stack applications with modern, responsive UI and clean code.
            He is experienced in creating REST APIs, managing databases, and deploying web projects.
            He values problem-solving, performance, and user-friendly design.

            When users ask about Anil Kumar, describe his professional skills and portfolio projects.
            Never share sensitive or personal information such as home address, or credentials.
            Always answer politely, clearly, and professionally.
            
            RULES:
            - Answer only what the user specifically asks about.
            - Do not reveal all information at once.
            - If the user asks "Tell me about Anil Kumar", give a short professional intro only.
            - If the user asks about projects, then provide project-related details.
            - If the user asks about skills, then provide skill details.
            - Never share personal/sensitive info (credentials).`,
          },
          { role: "user", content: message },
        ],
      }),
    });

    const data = await response.json();

    if (data.error) {
      return res.status(500).json({ error: data.error.message || "Groq API error" });
    }

    const reply =
      data.choices?.[0]?.message?.content || "Sorry, I couldn't generate a response.";

    res.json({ reply });
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
