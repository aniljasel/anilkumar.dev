export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // ✅ Parse request body manually
    const buffers = [];
    for await (const chunk of req) {
      buffers.push(chunk);
    }
    const bodyString = Buffer.concat(buffers).toString();
    const { message } = JSON.parse(bodyString || "{}");

    const apiKey = process.env.GROQ_API_KEY;

    if (!message) return res.status(400).json({ error: "No message provided" });
    if (!apiKey) return res.status(500).json({ error: "API key missing" });

    console.log("➡️ Incoming message:", message);

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [{ role: "user", content: message }],
      }),
    });

    console.log("➡️ Groq status:", response.status);
    const data = await response.json();
    console.log("➡️ Groq response:", JSON.stringify(data, null, 2));

    if (data.error) {
      return res.status(500).json({ error: data.error.message || "Groq API error" });
    }

    const reply =
      data.choices?.[0]?.message?.content || "Sorry, I couldn't generate a response.";
    return res.status(200).json({ reply });
  } catch (err) {
    console.error("❌ Groq API error:", err);
    return res.status(500).json({ error: String(err) });
  }
}
