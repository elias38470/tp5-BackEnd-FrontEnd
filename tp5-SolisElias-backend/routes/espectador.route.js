//defino controlador para el manejo de CRUD 

const espectadorCtrl = require('./../controllers/espectador.controller');

//creamos el manejador de rutas 

const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de agente 

router.get('/', espectadorCtrl.getEspectador); // http://localhost:3000/api/producto/


router.post('/', espectadorCtrl.createEspectador); // http://localhost:3000/api/agente/


//router.get('/:id', productoCtrl.getProducto);  // http://localhost:3000/api/agente/
//router.put('/:id', productoCtrl.editProducto);
//router.delete('/:id', productoCtrl.deleteProducto);
//router.get('/:destacado',productoCtrl.getProductosDestacados);

//exportamos el modulo de rutas 

module.exports = router;