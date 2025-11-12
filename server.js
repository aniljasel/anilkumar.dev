import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;
const HF_KEY = process.env.HUGGINGFACE_API_KEY || "";
const HF_MODEL = process.env.HUGGINGFACE_MODEL || "gpt2"; 

function mockReply(message) {
  const raw = (message || "").trim().toLowerCase();
  if (!raw) return "Hi — I'm Sora your AI assistant. How can help you!";
  if (raw.includes("hello") || raw.includes("hi")) {
    return "Hello! I'm Sora. How can help you?.";
  }
  if (raw.includes("who are you")) {
    return "I'm Sora — your AI assistant prototype powered by Anil Kumar.";
  }
  if (raw.includes("help")) {
    return "Try asking: 'What can you do?', 'Tell me about Anil Kumar', or say 'demo'.";
  }
  if (raw.endsWith("?")) {
    return "That's a good question — I'm running in mock mode right now; when API is enabled I'll answer smarter.";
  }
  return `I received "${message}". ....`;
}

async function callHuggingFace(message) {
  if (!HF_KEY) throw new Error("HUGGINGFACE_API_KEY not set");

  const url = "https://router.huggingface.co/hf-inference";

  const body = {
    model: HF_MODEL,
    inputs: message,
    parameters: {
      max_new_tokens: 150,
      temperature: 0.7
    },
    options: { wait_for_model: true }
  };

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${HF_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const txt = await res.text();
    const err = new Error(`HF inference error: ${res.status} ${res.statusText}`);
    err.details = txt;
    err.status = res.status;
    throw err;
  }

  const data = await res.json();

  if (Array.isArray(data) && data[0] && typeof data[0].generated_text === "string") {
    return data[0].generated_text.trim();
  }
  if (data && typeof data.generated_text === "string") {
    return data.generated_text.trim();
  }
  if (Array.isArray(data) && data.every(item => typeof item === "string")) {
    return data.join("\n").trim();
  }
  for (const k of ["generated_text", "text", "output", "response"]) {
    if (data && typeof data[k] === "string") return data[k].trim();
  }

  return JSON.stringify(data).slice(0, 1500);
}

app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body || {};
    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "No message provided" });
    }

    if (HF_KEY) {
      try {
        const reply = await callHuggingFace(message);
        return res.json({ reply });
      } catch (hfErr) {
        console.error("HuggingFace error — falling back to mock:", hfErr?.message || hfErr, hfErr?.details || "");
        const fallback = mockReply(message);
        return res.json({ reply: fallback, info: "fallback", note: "HuggingFace API error — returned mock reply." });
      }
    }

    const fallback = mockReply(message);
    return res.json({ reply: fallback, info: "mock", note: "No HUGGINGFACE_API_KEY set on server." });
  } catch (err) {
    console.error("Server error in /api/chat:", err);
    const safe = mockReply(req.body?.message || "");
    return res.status(200).json({ reply: safe, info: "mock", note: "Server error occurred; returned mock reply." });
  }
});

app.get("/api/health", (req, res) => res.json({ ok: true, huggingface: !!HF_KEY, model: HF_MODEL }));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log("Hugging Face configured:", !!HF_KEY, "model:", HF_MODEL);
});
