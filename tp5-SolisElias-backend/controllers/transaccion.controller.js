const Transaccion = require('../models/transaccion'); 

const transaccionCtrl = {} 


transaccionCtrl.getTransaccion = async(req,res)=>{
    let criterio = {}
    if ((req.query.email != null && req.query.email != "")) {  // tambien podria cambiar la condicion por if (req.query.destacado !== undefined)
      criterio.emailCliente = req.query.email;
    }
    if ((req.query.origen != null && req.query.origen != "")&&(req.query.destino != null && req.query.destino != "")) {  // tambien podria cambiar la condicion por if (req.query.destacado !== undefined)
      criterio.monedaOrigen = req.query.origen;
      criterio.monedaDestino= req.query.destino;
    }

    const transacciones = await Transaccion.find(criterio);
    res.json(transacciones);
};

transaccionCtrl.createTransaccion = async (req, res) =>{
    console.log(req.body)
    var transaccion = new Transaccion(req.body);
    try { 
        await transaccion.save(); 
        res.json({ 'status': '1', 'msg': 'Agente guardado.'}) 
    } catch (error) { 
        res.status(400).json({ 
            'status': '0', 
            'msg': 'Error procesando operacion.'}) 
    } 
};

transaccionCtrl.getHistoricoTransacciones = async (req, res) => {
    console.log(req.params)
    try {
      const { email } = req.params; // Acceder al parámetro 'email' de req.params
      const historicoTransacciones = await Transaccion.find({ emailCliente: email });
      res.json(historicoTransacciones);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener el histórico de transacciones', error });
    }
  };
  
  transaccionCtrl.getTransaccionesPorDivisas = async (req, res) => {
    try {
      const { Origen, Destino } = req.params;
  
      // Realiza la búsqueda de las transacciones utilizando los parámetros recibidos
      const transacciones = await Transaccion.find({ monedaOrigen:Origen , monedaDestino:Destino });
  
      res.json(transacciones);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener las transacciones', error });
    }
  };

  //este codigo es usando query y la url para que funcione deberia ser : http://localhost:3000/transaccion?origen=ARS&destino=USD
  /*transaccionCtrl.getTransaccionesPorDivisas = async (req, res) => {
    try {
      const { origen, destino } = req.query; // Obtener los parámetros de consulta
      
      // Realizar la búsqueda de las transacciones utilizando los parámetros recibidos
      const transacciones = await Transaccion.find({ monedaOrigen: origen, monedaDestino: destino });
  
      res.json(transacciones);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener las transacciones', error });
    }
};*/


module.exports = transaccionCtrl;