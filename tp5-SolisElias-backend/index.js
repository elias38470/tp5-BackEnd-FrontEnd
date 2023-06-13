const express = require('express');//libreria express permite un manejo de rutas
const cors = require('cors');//libreria que permite habilitar o no referencias cruzadas en aplicaciones
const { mongoose } = require('./database');

var app = express();

//middlewares 
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' }));

//Cargamos el modulo de direccionamiento de rutas 

app.use('/api/producto', require('./routes/producto.route.js')); 
app.use('/api/transaccion',require('./routes/transaccion.route.js'));
app.use('/api/ticket', require('./routes/ticket.route.js')); 
app.use('/api/espectador', require('./routes/espectador.route.js'));
//app.use('/api/sector', require('./routes/sector.route')); 

//setting 
app.set('port', process.env.PORT || 3000);

//starting the server 
app.listen(app.get('port'), () => {
    console.log(`Server started on port`, app.get('port'));
});