import React, { useState, useEffect } from 'react'; // Importa los hooks de React para manejar el estado y efectos secundarios.
import axios from 'axios'; // Importa axios para realizar solicitudes HTTP.
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Importa componentes de React Router para manejar el enrutamiento.
import ProductForm from '../ProductForm/ProductForm'; // Importa el componente del formulario de producto.
import ProductList from '../ProductList/ProductList'; // Importa el componente para listar productos.
import Detail from '../../views/Detail'; // Importa el componente para mostrar los detalles del producto.
import './App.css';

const App = () => {
    // Estados para manejar los datos del formulario y la lista de productos.
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [loaded, setLoaded] = useState(false); // Estado para verificar si los datos se han cargado.
    const [products, setProducts] = useState([]); // Estado para almacenar la lista de productos.
    
    // Maneja el envío del formulario.
    const onSubmitHandler = e => {
        e.preventDefault(); // Previene el comportamiento por defecto del formulario (recargar la página).
        axios.post('http://localhost:8000/', { // Envía una solicitud POST para agregar un nuevo producto.
            title,
            price,
            description
        })
            .then(res => {
                console.log(res); // Imprime la respuesta en la consola para depuración.
                fetchProducts(); // Actualiza la lista de productos después de agregar uno nuevo.
            })
            .catch(err => console.log(err)); // Maneja cualquier error en la solicitud.
    };

    // Función para obtener la lista de productos desde el servidor.
    const fetchProducts = () => {
        axios.get('http://localhost:8000/') // Envía una solicitud GET para obtener los productos.
            .then(res => {
                console.log(res.data); // Imprime los datos recibidos en la consola para depuración.
                setProducts(res.data); // Actualiza el estado con los productos obtenidos.
                setLoaded(true); // Marca que los productos se han cargado.
            })
            .catch(err => {
                console.log(err); // Maneja cualquier error en la solicitud.
                setLoaded(true); // Marca que la carga de productos ha terminado, incluso si hubo un error.
            });
    }

    // Efecto secundario que se ejecuta una vez después de que el componente se monta.
    useEffect(() => {
        fetchProducts(); // Llama a la función para obtener los productos.
    }, []); // El array vacío asegura que este efecto se ejecute solo una vez.

    return (
        <Router> {/* Configura el enrutamiento de la aplicación. */}
        <div className="App"> {/* Contenedor principal con clase de estilo. */}
            <Switch> {/* Elige el componente adecuado según la ruta. */}
                <Route exact path="/" render={() => (
                    <div>
                        <ProductForm
                            title={title}
                            price={price}
                            description={description}
                            setTitle={setTitle}
                            setPrice={setPrice}
                            setDescription={setDescription}
                            onSubmitHandler={onSubmitHandler}
                        />
                        <div className="divider"></div> {/* Línea divisoria entre el formulario y la lista de productos. */}
                        {loaded && <ProductList products={products} />} {/* Muestra la lista de productos solo si se han cargado. */}
                    </div>
                )}/>
                <Route path="/:id" render={(routeProps) => (
                    <Detail {...routeProps} /> 
                )}/>
            </Switch>
        </div>
    </Router>
    );
};

export default App;
