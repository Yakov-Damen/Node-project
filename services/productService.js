import productDal from '../productDal/productDal.js';

export const getAllProducts = productDal.getAllProducts;

export const getProductById = (id) => {
    const products = getAllProducts();
    for (const product of products) {
        if (product.id === id) return product; 
    }
}


