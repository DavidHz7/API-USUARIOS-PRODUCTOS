
const { Router } = require('express');
const {viewproducto, Deleteproductos, Editproductos,Showproductos,addProduct} = require('../controllers/producto.controller');
// Ruta para obtener una lista de productos
const routerprod = Router();



routerprod.get('/',viewproducto);
routerprod.get('/lista',Showproductos);
routerprod.post('/',addProduct);
routerprod.put('/:id',Editproductos);
routerprod.delete('/:id',Deleteproductos);


module.exports = routerprod;
