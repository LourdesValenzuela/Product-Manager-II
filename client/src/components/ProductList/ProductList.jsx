import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ products = [] }) => { // Desestructura `products` de las props y asigna un valor por defecto de un array vacío.
    return (
        <div>
            <h2>All Products:</h2> {/* Título de la sección de productos. */}
            {products.length > 0 ? ( // Verifica si hay productos en la lista.
                products.map((product, idx) => ( // Mapea a través de los productos y crea un enlace para cada uno.
                    <p key={idx}> {/* Usa el índice como clave para cada producto en la lista. */}
                        <Link to={`/${product._id}`}> {/* Crea un enlace a la página de detalles del producto. */}
                            {product.title} {/* Muestra el título del producto dentro del enlace. */}
                        </Link>
                    </p>
                ))
            ) : (
                <p>No products available</p>
            )}
        </div>
    );
};

export default ProductList;
