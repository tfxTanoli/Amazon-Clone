import express from "express";
import {
  createProduct,
  getProduct,
  deleteProduct,
  putProduct,
} from "../controllers/products.js";

const router = express.Router();

<<<<<<< HEAD
router.get("/",getProduct);
=======
router.get("/", getProduct);
>>>>>>> bdfb609cc4ad6053a25c77e546c3884553e7295f

export default router;
