import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config({ path: '.env.local' });

const app = express();
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.post('/api/chat', async (req, res) => {
    console.log('Received POST /api/chat:', req.body);
    const { message } = req.body;
    const apiKey = process.env.GROQ_API_KEY;

    if (!message) return res.status(400).json({ error: 'No message provided' });
    if (!apiKey) return res.status(500).json({ error: 'API key missing' });

    try {
        console.log('Calling Groq API...');
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'llama-3.3-70b-versatile', // free fast model
                messages: [{ role: 'user', content: message }],
            }),
        });

        console.log('Groq status:', response.status);
        const data = await response.json();
        console.log('Groq response:', JSON.stringify(data, null, 2));

        if (data.error) {
            console.error('Groq API error:', data.error);
            return res.status(500).json({ error: data.error.message || 'Groq API error' });
        }

        const reply = data.choices?.[0]?.message?.content || "Sorry, I couldn't generate a response.";
        res.json({ reply });
    } catch (err) {
        console.error('Groq API error (catch):', err);
        res.status(500).json({ error: String(err) });
    }
});

app.listen(3001, () => console.log('Server running on port 3001'));
