import express from 'express';
import { createProduct, getProduct, deleteProduct , putProduct } from '../controllers/products.js';

const router = express.Router();

router.get("/",getProduct);
router.delete("/:productId", deleteProduct);
router.post("/",createProduct);
router.put("/",putProduct);

export default router;