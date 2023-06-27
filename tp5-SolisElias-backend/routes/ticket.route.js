//defino controlador para el manejo de CRUD 

const ticketCtrl = require('./../controllers/ticket.controller');

//creamos el manejador de rutas 

const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de agente 

router.get('/',ticketCtrl.getTicket ); // http://localhost:3000/api/ticket/
router.post('/',ticketCtrl.createTicket);// http://localhost:3000/api/ticket/




router.get('/:id', ticketCtrl.getUnTicket);  // http://localhost:3000/api/agente/
router.put('/:id', ticketCtrl.editTicket);
router.delete('/:id', ticketCtrl.deleteTicket);
router.get('/:categoriaEspectador',ticketCtrl.getTicketPorCategoriaEspectador);
//router.get('/:destacado',productoCtrl.getProductosDestacados);

//exportamos el modulo de rutas 

module.exports = router;