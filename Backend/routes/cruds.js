import express from 'express';
import { getProduct , createProduct , putProduct , deleteProduct } from '../controllers/products.js';

const router = express.Router();

router.get("/admin",getProduct)
router.delete("/admin:productId", deleteProduct);
router.post("/admin", createProduct);
router.put("/admin", putProduct);

export default router;