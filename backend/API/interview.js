import express from 'express';
import nodemailer from 'nodemailer';
import { submitInterviewRequest, fetchMatchedLevelTimeSlots } from '../db.js';

const interviewRouter = express.Router();

interviewRouter.post('/submitInterview', async (req, res) => {
  try {
    const newInterview = await submitInterviewRequest(
      req.body.userid,
      req.body.interviewObj,
      req.body.timeSlots,
      req.body.authToken
    );
    res.status(201).send(newInterview);
  } catch (err) {
    console.log('in error');
    res.status(500).send(err);
  }
});

interviewRouter.post('/getMatchedLevelTimeSlots', async (req, res) => {
  try {
    const timeSlots = await fetchMatchedLevelTimeSlots(req.body.algoLevel, req.body.authToken);
    res.status(200).send(timeSlots);
  } catch (err) {
    res.status(500).send(err);
  }
});

export { interviewRouter };
