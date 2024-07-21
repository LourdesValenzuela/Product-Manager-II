const mongoose = require('mongoose'); // Importa el módulo Mongoose para interactuar con MongoDB.

// Conecta a la base de datos MongoDB en el puerto 27017 y a la base de datos 'crmdb'.
mongoose.connect('mongodb://localhost:27017/crmdb', {
    useNewUrlParser: true, // Usa el nuevo analizador de URL de MongoDB (evita advertencias de deprecación).
    useUnifiedTopology: true // Usa el nuevo motor de topología unificada de MongoDB.
})
    .then(() => console.log('Established a connection to the database')) // Mensaje en consola si la conexión es exitosa.
    .catch(err => console.log('Something went wrong when connecting to the database', err)); // Maneja errores de conexión.
