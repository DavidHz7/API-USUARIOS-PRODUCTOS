
const { Router } = require('express');
const {viewproducto, productoGet} = require('../controllers/producto.controller');
// Ruta para obtener una lista de productos
const routerprod = Router();



routerprod.get('/',viewproducto);
routerprod.get('/lista',productoGet);


module.exports = routerprod;
