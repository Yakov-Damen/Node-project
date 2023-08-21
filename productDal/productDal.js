import jsonFile from 'jsonfile';

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
