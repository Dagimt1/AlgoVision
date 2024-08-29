import express from 'express';
import { userRouter } from './user.js';
import { interviewRouter } from './interview.js';

const apiRouter = express.Router();

apiRouter.use('/user', userRouter);

apiRouter.use('/interview', interviewRouter);

export { apiRouter };
