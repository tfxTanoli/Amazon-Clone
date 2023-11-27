import express from 'express';
import { addProduct, getProduct } from '../controllers/products.js';

const router = express.Router();

router.get("/",getProduct);

// router.post("/",addProduct);

export default router;