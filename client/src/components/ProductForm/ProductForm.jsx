import React from 'react';
import './ProductForm.css';

const ProductForm = ({
    title,
    price,
    description,
    setTitle,
    setPrice,
    setDescription,
    onSubmitHandler
}) => {
    return (
        <div className="product-form-container"> {/* Contenedor principal del formulario. */}
            <form className="product-form" onSubmit={onSubmitHandler}> {/* Formulario para agregar un nuevo producto. */}
                <h2>Product Manager</h2> {/* Título del formulario. */}
                
                {/* Grupo de campos del formulario */}
                <div className="form-group">
                    <label>Title</label> {/* Etiqueta para el campo del título. */}
                    <input
                        type="text" /* Tipo de entrada para texto. */
                        onChange={(e) => setTitle(e.target.value)} /* Actualiza el estado `title` cuando el valor cambia. */
                        value={title} /* Valor del campo basado en el estado `title`. */
                    />
                </div>

                <div className="form-group">
                    <label>Price</label> {/* Etiqueta para el campo del precio. */}
                    <input
                        type="number" /* Tipo de entrada para números. */
                        onChange={(e) => setPrice(e.target.value)} /* Actualiza el estado `price` cuando el valor cambia. */
                        value={price} /* Valor del campo basado en el estado `price`. */
                    />
                </div>

                <div className="form-group">
                    <label>Description</label> {/* Etiqueta para el campo de la descripción. */}
                    <input
                        type="text" /* Tipo de entrada para texto. */
                        onChange={(e) => setDescription(e.target.value)} /* Actualiza el estado `description` cuando el valor cambia. */
                        value={description} /* Valor del campo basado en el estado `description`. */
                    />
                </div>

                <input type="submit" value="Create" /> {/* Botón de envío del formulario. */}
            </form>
        </div>
    );
};

export default ProductForm;
