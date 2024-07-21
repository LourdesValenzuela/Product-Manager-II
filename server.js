// Importa el módulo 'express', que es un framework para construir aplicaciones web en Node.js.
const express = require('express');

// Importa el módulo 'cors', que es un middleware para habilitar CORS (Cross-Origin Resource Sharing).
const cors = require('cors');

// Crea una nueva instancia de la aplicación Express.
const app = express();

// Define el puerto en el que el servidor escuchará las solicitudes.
const PORT = 8000;

// Requiere el archivo de configuración de Mongoose para conectar a la base de datos MongoDB.
require('./server/config/mongoose.config');

// Usa el middleware 'cors' para permitir solicitudes de otros dominios.
app.use(cors());

// Usa el middleware 'express.json()' para parsear el cuerpo de las solicitudes entrantes en formato JSON.
app.use(express.json());

// Usa el middleware 'express.urlencoded({ extended: true })' para parsear el cuerpo de las solicitudes
// entrantes con datos codificados en URL
app.use(express.urlencoded({ extended: true }));

// Requiere el archivo de rutas 'product.routes' y pasa la instancia de 'app' para configurar las rutas.
require('./server/routes/product.routes')(app);

// Inicia el servidor y hace que escuche en el puerto definido (8000).
app.listen(PORT, () => {
    // Imprime un mensaje en la consola indicando que el servidor está escuchando en el puerto especificado.
    console.log(`Listening at Port ${PORT}`);
});
