import express from 'express';
import { createProduct, getProduct, deleteProduct , putProduct } from '../controllers/products.js';

const router = express.Router();

router.get("/",getProduct);

export default router;