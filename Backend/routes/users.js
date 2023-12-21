import express from 'express';
import { addUser } from '../controllers/users.js';

const router = express.Router();

router.post("/signup", addUser);


export default router;