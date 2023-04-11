    class ProductManager {
    constructor() {
        this.products = [];
        this.productIdCounter = 1;
    }

    addProduct = (title, description, price, thumbnail, code, stock) => {
        const existingProduct = this.products.find(
            (product) => product.code === code
        );
        if (existingProduct) {
            console.log("Este producto ya existe.");
        } else if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("Ingrese los datos para cada uno de sus campos.");
        } else {
            const newProduct = {
                id: this.productIdCounter++,
                title,
                description,
                price,
                thumbnail,
                code,
                stock,
            };
            this.products.push(newProduct);
            console.log(`El producto "${newProduct.title}" ha sido agregado satisfactoriamente.`);
        }
    };

    getProducts = () => this.products;

    getProductById = (id) => {
        const product = this.products.find((product) => product.id === id);
        if (product) {
            console.log(product);
        } else {
            console.log(`El producto con id ${id} no existe.`);
        }
    };

    updateProduct = (id, updatedFields) => {
        const productIndex = this.products.findIndex((product) => product.id === id);
        if (productIndex !== -1) {
            const updatedProduct = Object.assign({}, this.products[productIndex], updatedFields);
            this.products[productIndex] = updatedProduct;
            console.log(`El producto con id ${id} ha sido actualizado satisfactoriamente.`);
        } else {
            console.log(`El producto con id ${id} no existe.`);
        }
    };

    deleteProduct = (id) => {
        const productIndex = this.products.findIndex((product) => product.id === id);
        if (productIndex !== -1) {
            this.products.splice(productIndex, 1);
            console.log(`El producto con id ${id} ha sido eliminado satisfactoriamente.`);
        } else {
            console.log(`El producto con id ${id} no existe.`);
        }
    };
}

const productManager = new ProductManager();

console.log(productManager.getProducts()); // []

productManager.addProduct(
    "producto prueba",
    "Este es un producto prueba",
    200,
    "Sin imagen",
    "abc123",
    25
); // El producto "producto prueba" ha sido agregado satisfactoriamente.

console.log(productManager.getProducts()); // [{ id: 1, title: 'producto prueba', description: 'Este es un producto prueba', price: 200, thumbnail: 'Sin imagen', code: 'abc123', stock: 25 }]

productManager.getProductById(1); // { id: 1, title: 'producto prueba', description: 'Este es un producto prueba', price: 200, thumbnail: 'Sin imagen', code: 'abc123', stock: 25 }

productManager.updateProduct(1, { title: "Producto de prueba actualizado" }); // El producto con id 1 ha sido actualizado satisfactoriamente.

productManager.getProductById(1); // { id: 1, title: 'Producto de prueba actualizado', description: 'Este es un producto prueba', price: 200, thumbnail: 'Sin imagen', code: 'abc123', stock: 25 }

productManager.deleteProduct(1); // El producto con id 1 ha sido eliminado satisfactoriamente.

productManager.getProductById(1); // El producto
