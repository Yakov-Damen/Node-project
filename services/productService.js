import * as productDal from '../productDal/productDal.js';

export function addQuantity(obj) {
    for (let product of obj) {
        product.quantity = Math.ceil(Math.random() * 100);
    } return obj;
}

// returns a promise that resolves to a json of all products
export async function getAllProducts() {
    return await productDal.getAllProducts();
}

// returns a promise that resolves to a json of a single product by id
export async function getProductById(id) {
    const products = await getAllProducts();
    for (const product of products) {
        if (product.id === id) return product; 
    }
}

// adds a new product and returns a promise that resolves to a updated json of all the products
export const addProduct = async (product) => {
    const products = await getAllProducts();
    products.push(product);
    productDal.saveProducts(products);
    return products;
}

// updates a product by id and returns a promise that resolves to a updated json of all the products
export async function updateProduct(id, product) {
    const products = await getAllProducts();
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            products[i] = product;
            productDal.saveProducts(products);
            return products;
        }
    }
}

// updates a products quantity by id and returns a promise that resolves to a updated json of all the products
export async function updateProductCount(id, productCount) {
    const products = await getAllProducts();
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            products[i].quantity = productCount;
            productDal.saveProducts(products);
            return products;
        }
    }
}

// deletes a product by id and returns a promise that resolves to a updated json of all the products
export async function deleteProduct(id) {
    await productDal.deleteProduct(id);
    return await getAllProducts();
}