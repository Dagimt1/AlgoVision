import express from 'express';
import { register, logIn, getAllUsers, changePassword } from '../db.js';

const userRouter = express.Router();

userRouter.post('/register', async (req, res) => {
  try {
    const newUser = await register(req.body.email, req.body.password);
    res.status(201).send(newUser);
  } catch (err) {
    res.status(500).send(err);
  }
});

userRouter.get('/', async (req, res) => {
  try {
    const allUsers = await getAllUsers();
    res.status(201).send(allUsers);
  } catch (err) {
    res.status(500).send(err);
  }
});

userRouter.post('/login', async (req, res) => {
  try {
    const result = await logIn(req.body.email, req.body.password);
    if (result.error) {
      res.status(401).send(result.error);
    } else {
      res.status(201).send(result);
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

userRouter.put('/password', async (req, res) => {
  try {
    const result = await changePassword(req.body.email, req.body.newPassword);
    res.status(201).send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

export { userRouter };
