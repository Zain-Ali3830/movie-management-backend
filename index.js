import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { authRouter } from './routes/auth.routes.js';
import { movieRouter } from './routes/movie.controllers.js';
const app = express();
app.use(cors({ origin: '*' }))
dotenv.config();
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World!');
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use('/api/auth', authRouter);
app.use('/api', movieRouter);