import express from "express";
import { addUser, addGoogleUser } from "../controllers/users.js";

const router = express.Router();

router.post("/signup", addUser);
// <<<<<<< HEAD
router.post("/signup:isGoogle", addGoogleUser);
// =======

// >>>>>>> bdfb609cc4ad6053a25c77e546c3884553e7295f

export default router;
