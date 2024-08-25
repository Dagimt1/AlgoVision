import express from 'express';
import { userRouter } from './user.js';
import chatgptRouter from './chatgpt.js';

const apiRouter = express.Router();

apiRouter.use('/user', userRouter);

apiRouter.use('/chatgpt', chatgptRouter);

export { apiRouter };
