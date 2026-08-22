import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

ddotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 5000;

// Health‑check endpoint
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok' });
});

// TODO: add other routes (auth, meals, etc.)

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
