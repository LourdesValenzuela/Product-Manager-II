// Importa el controlador 'ProductController' que contiene la lógica para manejar las solicitudes relacionadas con productos.
const ProductController = require('../controllers/product.controller');

// Exporta una función que toma una instancia de 'app' (una aplicación Express) y define las rutas de la API.
module.exports = function(app) {
    // Define una ruta POST en la raíz ('/') para crear un nuevo producto.
    // La solicitud es manejada por el método 'createProduct' del 'ProductController'.
    app.post('/', ProductController.createProduct);

    // Define una ruta GET en la raíz ('/') para obtener todos los productos.
    // La solicitud es manejada por el método 'getAllProducts' del 'ProductController'.
    app.get('/', ProductController.getAllProducts);

    // Define una ruta GET en '/:id' para obtener un producto específico por su ID.
    // La solicitud es manejada por el método 'getProducts' del 'ProductController'.
    app.get('/:id', ProductController.getProducts);
}
