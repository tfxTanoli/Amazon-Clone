import express from "express";
import { addUser, addGoogleUser } from "../controllers/users.js";

const router = express.Router();

router.post("/signup", addUser);
router.post("/signup:isGoogle", addGoogleUser);

export default router;