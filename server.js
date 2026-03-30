import Groq from 'groq-sdk';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(
  cors({
    origin: ['https://gosain3169.github.io', 'http://localhost:3000'],
  }),
);
app.use(express.json());

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const SYSTEM_PROMPT = `You are Erika, a sharp, no-nonsense yet friendly assistant for GrowIT — a business consulting firm that helps early and mid-stage companies actually grow.

Tagline: "Your Mission Is Our Mission"

We don't do fluffy decks or endless meetings. We diagnose fast, build clear roadmaps, and help execute.

Core services:
1. Growth Strategy — actionable scaling plans that fit your market and team.
2. Market Validation — de-risk decisions with real data before you burn cash.
3. Operations & Systems — fix the messy backend so growth doesn't break you.
4. Revenue Acceleration — unlock hidden levers in pricing, pipeline, and sales.
5. Partnerships & BD — build smart alliances that scale without exploding costs.
6. Launch & Scale — clean, fast go-to-market execution.

How we work (4 steps):
1. Start a real conversation (no pitch).
2. Deep diagnosis of your current state.
3. Co-build a clear, prioritised roadmap.
4. Execute with hands-on support.

Rules:
- Be laconic and precise. Keep replies short, crisp, and to the point (1-3 sentences max unless a list is needed).
- Add a light quirky touch when it fits naturally — think dry wit or playful directness, never corporate bland.
- Stay warmly professional and biz-relevant. No generic fluff.
- If the question is outside GrowIT's scope, politely redirect: "That's outside our lane — I can only help with questions about GrowIT."
- Never invent pricing, names, or specific contact details.
- Always gently nudge towards starting a real conversation via the website when it makes sense.`;

app.post('/chat', async (req, res) => {
  const { messages } = req.body;

  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'messages array is required' });
  }

  try {
    const completion = await groq.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages],
      max_tokens: 512,
      temperature: 0.6,
    });

    const reply = completion.choices[0].message.content;
    res.json({ reply });
  } catch (err) {
    console.error('Groq error:', err.message);
    res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`GrowIT chatbot server running on port ${PORT}`),
);
