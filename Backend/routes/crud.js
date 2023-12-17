import { getProduct , deleteProduct , createProduct , putProduct } from "../controllers/products.js";
import express from "express";

const router = express.Router();

router.get("/admin",getProduct)
router.delete("/admin:productId", deleteProduct);
router.post("/admin", createProduct);
router.put("/admin", putProduct);

export default router;