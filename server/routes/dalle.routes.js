import express from 'express';
import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.route('/')
  .get((req, res) => {
    res.status(200).json({ message: "Hello from DALL·E ROUTES" });
  })
  .post(async (req, res) => {
    try {
      const { prompt } = req.body;

      const response = await openai.images.generate({
        model: "dall-e-3",   // you can also use "dall-e-2"
        prompt,
        size: "1024x1024",
        n: 1,
      });

      const image = response.data[0].b64_json;

      res.status(200).json({ photo: `data:image/png;base64,${image}` });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Something went wrong", error: error.message });
    }
  });

export default router;
