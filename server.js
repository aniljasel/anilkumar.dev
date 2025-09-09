import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.post('/api/chat', async (req, res) => {
    console.log('Received POST /api/chat:', req.body);
    const { message } = req.body;
    const apiKey = process.env.DEEPAI_API_KEY;

    if (!message) return res.status(400).json({ error: 'No message provided' });
    if (!apiKey) return res.status(500).json({ error: 'API key missing' });

    try {
        console.log('Calling DeepAI...');
        const response = await fetch('https://api.deepai.org/api/text-generator', {
        method: 'POST',
        headers: {
            'Api-Key': apiKey,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `text=${encodeURIComponent(message)}`,
        });
        console.log('DeepAI status:', response.status);

        console.log('DeepAI status:', response.status); // <-- Add this
        const data = await response.json();
        console.log('DeepAI response:', JSON.stringify(data, null, 2)); // <-- Already present

        if (data.err || data.error) {
            console.error('DeepAI API error:', data.err || data.error);
            return res.status(500).json({ error: data.err || data.error });
        }

        res.json({ reply: data.output || "Sorry, I couldn't generate a response." });
    } catch (err) {
        console.error('DeepAI API error (catch):', err);
        res.status(500).json({ error: String(err) });
    }
});

app.listen(3001, () => console.log('Server running on port 3001'));