// Importa el modelo 'Product' desde el archivo 'product.model.js'.
const { Product } = require('../models/product.model');

// Maneja la creación de un nuevo producto.
module.exports.createProduct = (request, response) => {
    // Desestructura el cuerpo de la solicitud para obtener 'title', 'price', y 'description'.
    const { title, price, description } = request.body;
    
    // Crea un nuevo producto utilizando el modelo 'Product'.
    Product.create({
        title,
        price,
        description
    })
    // Si la creación es exitosa, responde con el producto creado en formato JSON.
    .then(product => response.json(product))
    // Si ocurre un error, responde con el error en formato JSON.
    .catch(err => response.json(err));
}

// Método para obtener todos los productos de la base de datos.
module.exports.getAllProducts = (request, response) => {
    // Busca todos los documentos en la colección 'Product'.
    Product.find({})
    // Si la búsqueda es exitosa, responde con los productos encontrados en formato JSON.
    .then(products => response.json(products))
    // Si ocurre un error, responde con el error en formato JSON.
    .catch(err => response.json(err));
}

// Método para obtener un producto específico basado en el ID proporcionado en los parámetros de la solicitud.
module.exports.getProducts = (request, response) => {
    // Busca un producto con el ID proporcionado en los parámetros de la solicitud.
    Product.findOne({_id: request.params.id})
    // Si la búsqueda es exitosa, responde con el producto encontrado en formato JSON.
    .then(product => response.json(product))
    // Si ocurre un error, responde con el error en formato JSON.
    .catch(err => response.json(err));
}


