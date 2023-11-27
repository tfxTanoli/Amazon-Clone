import express from 'express';
import { createProduct, getProduct } from '../controllers/products.js';

const router = express.Router();

// router.get("/",getProduct);

router.post("/",createProduct);

export default router;