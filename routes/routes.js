import express from 'express';
import * as productController from '../controller/productController.js';
const router = express.Router();

router.get('/all-products', productController.getAllProducts);

router.get('/product/:id', productController.getProductById);

router.post('/add-product', productController.addProduct);

router.put('/update-product/:id', productController.updateProduct);

router.put('/update-product-count/:id', productController.updateProductCount);

router.delete('/delete-product/:id', productController.deleteProduct);







export default router;