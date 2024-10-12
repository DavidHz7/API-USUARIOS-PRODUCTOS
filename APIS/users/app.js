require('dotenv').config();

const Server = require('./models/server');
const server = new Server();

server.listen();


const express = require('express');
const productoRoute = require('./routes/producto.route'); // Importar rutas de productos

const app = express();

// Registrar rutas de productos
app.use('/api', productoRoute);

// Iniciar servidor
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor iniciado en el puerto ${port}`));
