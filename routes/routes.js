import express from 'express';
import * as productController from '../controller/productController.js';
const router = express.Router();

router.get('/all-products', productController.getAllProducts);

router.get('/product/:id', productController.getProductById);









export default router;