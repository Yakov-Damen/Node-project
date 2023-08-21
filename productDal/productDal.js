import jsonFile from 'jsonfile';
import axios from 'axios';

export async function getProductsFromAPI() {
    try {
        const response = await axios.get('https://fakestoreapi.com/products');
        console.log('data successfully fetched from api');
        return response;
    } catch (error) {
        console.error(error);
    }
}

export async function getAllProducts() {
        const data = await jsonFile.readFile('./db/data.json');
        return data;
};

export async function saveProducts(products) {
        const writer = await jsonFile.writeFile('./db/data.json', products);
        return writer;
}

export async function deleteProduct(id) {
        const data = await getAllProducts();
        const filteredData = data.filter(product => product.id !== id);
        const writer = await jsonFile.writeFile('./db/data.json', filteredData);
        return writer;
}
