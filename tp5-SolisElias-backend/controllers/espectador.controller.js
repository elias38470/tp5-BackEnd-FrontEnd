const Espectador = require('../models/espectador'); 

const espectadorCtrl = {} 

espectadorCtrl.getEspectador = async(req,res)=>{
    var espectadores = await Espectador.find();
    res.json(espectadores);
};

espectadorCtrl.createEspectador = async (req, res) =>{
    console.log(req.body)
    var espectador = new Espectador(req.body);
    try { 
        await espectador.save(); 
        res.json({ 'status': '1', 'msg': 'Agente guardado.'}) 
    } catch (error) { 
        res.status(400).json({ 
            'status': '0', 
            'msg': 'Error procesando operacion.'}) 
    } 
};

module.exports = espectadorCtrl;