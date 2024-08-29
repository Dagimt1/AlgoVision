import dotenv from 'dotenv';
import express from 'express';
import axios from 'axios';
import cors from 'cors';  // Update this line to use import instead of require

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.CHATCAT_PORT || 4000;

app.use(cors());  // CORS middleware to handle cross-origin requests

app.use(express.json());

app.post('/chat', async (req, res) => {
    const userMessage = req.body.message;

    try {
        const response = await axios.post(
            process.env.CHATCAT_API_URL, 
            { inputs: userMessage },
            {
                headers: { Authorization: `Bearer ${process.env.HUGGING_FACE_API_KEY}` },
            }
        );

        const botReply = response.data[0].generated_text;
        res.json({ reply: botReply });
    } catch (error) {
        if (error.response) {
            console.error('Error communicating with GPT-2:', error.response.status, error.response.data);
            res.status(error.response.status).send(error.response.data);
        } else {
            console.error('Error communicating with GPT-2:', error.message);
            res.status(500).send('Internal Server Error');
        }
    }
});

app.listen(port, () => {
    console.log(`ChatCat server running on port ${port}`);
});
