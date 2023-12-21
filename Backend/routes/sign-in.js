import express from "express";
import { loginUser } from "../controllers/sign-in.js";

const router = express.Router();

router.get("/sign-in",loginUser);

export default router;