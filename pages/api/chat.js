import fetch from 'node-fetch';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'No message provided' });
  }

  const apiKey = process.env.DEEPAI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'API key missing' });
  }
  console.log('API KEY:', apiKey);

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
    return res.status(200).json({ reply: data.output || "⚠️ Sorry, I couldn't generate a response." });
  } catch (err) {
    return res.status(500).json({ error: 'DeepAI API error' });
  }
}