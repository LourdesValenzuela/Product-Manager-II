import React from 'react'; // Importa React para usar JSX y la biblioteca React.
import ReactDOM from 'react-dom/client'; // Importa ReactDOM para renderizar la aplicación en el DOM.
import App from '../src/components/App/App'; // Importa el componente raíz de la aplicación.
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <App /> // Renderiza el componente `App` dentro del elemento con el id 'root' en el DOM.
);
