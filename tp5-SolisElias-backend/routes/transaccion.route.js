//defino controlador para el manejo de CRUD 

const transaccionCtrl = require('./../controllers/transaccion.controller');

//creamos el manejador de rutas 

const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de agente 

router.get('/', transaccionCtrl.getTransaccion); // http://localhost:3000/api/transaccion/


router.post('/', transaccionCtrl.createTransaccion); // http://localhost:3000/api/transaccion/


//router.get('/:email', transaccionCtrl.getHistoricoTransacciones);  // http://localhost:3000/api/transaccion/
//router.get('/:Origen/:Destino',transaccionCtrl.getTransaccionesPorDivisas)
//router.put('/:id', productoCtrl.editProducto);
//router.delete('/:id', productoCtrl.deleteProducto);
//router.get('/:destacado',productoCtrl.getProductosDestacados);

//exportamos el modulo de rutas 

module.exports = router;