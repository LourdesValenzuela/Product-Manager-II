import React, { useEffect, useState } from 'react'; // Importa React, useEffect y useState para el componente.
import axios from 'axios'; // Importa axios para realizar solicitudes HTTP.

const Detail = (props) => {
    const [product, setProduct] = useState({}); // Estado para almacenar la información del producto.

    useEffect(() => {
        // Solicita los detalles del producto desde el servidor.
        axios.get(`http://localhost:8000/${props.match.params.id}`)
            .then(res => setProduct(res.data)) // Actualiza el estado con los datos del producto.
            .catch(err => console.log(err)); // Maneja los errores de la solicitud.
    }, [props.match.params.id]); // Vuelve a ejecutar el efecto cuando el ID del producto cambia.

    return (
        <div>
            <h2>{product.title}</h2> {/* Muestra el título del producto. */}
            <p>Price: {product.price}</p> {/* Muestra el precio del producto. */}
            <p>Description: {product.description}</p> {/* Muestra la descripción del producto. */}
        </div>
    );
};

export default Detail;
