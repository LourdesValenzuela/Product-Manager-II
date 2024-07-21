// Importa el módulo 'mongoose' que proporciona funcionalidades para interactuar con MongoDB.
const mongoose = require('mongoose');

// Define el esquema para el modelo 'Product'.
const ProductSchema = new mongoose.Schema({
    // Campo para el título del producto, de tipo String.
    title: { type: String },
    // Campo para el precio del producto, de tipo Number.
    price: { type: Number },
    // Campo para la descripción del producto, de tipo String.
    description: { type: String }
}, { timestamps: true }); // La opción 'timestamps' añade automáticamente campos de fecha de creación y actualización.

// Exporta el modelo 'Product' basado en el esquema 'ProductSchema'.
// El modelo 'Product' se usará para interactuar con la colección 'products' en MongoDB.
module.exports.Product = mongoose.model('Product', ProductSchema);
