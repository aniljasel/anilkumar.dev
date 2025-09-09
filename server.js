import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;
  const apiKey = process.env.DEEPAI_API_KEY;

  if (!message) return res.status(400).json({ error: 'No message provided' });
  if (!apiKey) return res.status(500).json({ error: 'API key missing' });

  try {
    const response = await fetch('https://api.deepai.org/api/text-generator', {
      method: 'POST',
      headers: {
        'Api-Key': apiKey,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({ text: message }),
    });
    const data = await response.json();
    res.json({ reply: data.output || "⚠️ Sorry, I couldn't generate a response." });
  } catch (err) {
    res.status(500).json({ error: 'DeepAI API error' });
  }
});

app.listen(3001, () => console.log('Server running on port 3001'));