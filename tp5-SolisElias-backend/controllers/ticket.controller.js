const Ticket = require('../models/ticket'); 

const ticketCtrl = {} 

ticketCtrl.getTicket = async(req,res)=>{

    try{
        let criterio = {};
        if((req.query.categoriaEspectador !=null && req.query.categoriaEspectador !="")){
            criterio.categoriaEspectador  = req.query.categoriaEspectador;
        }
        const tickets = await Ticket.find(criterio).populate('espectador');
        res.json(tickets);
    }catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los tickets' });
    }
};

ticketCtrl.createTicket = async (req, res) =>{
    console.log(req.body)
    var ticket = new Ticket(req.body);
    try { 
        await ticket.save(); 
        res.json({ 'status': '1', 'msg': 'Ticket guardado.'}) 
    } catch (error) { 
        res.status(400).json({ 
            'status': '0', 
            'msg': 'Error procesando operacion.'}) 
    } 
};

ticketCtrl.editTicket  = async (req, res) =>{
    const ticket = new Ticket(req.body);
    try{    
        await Ticket.updateOne({_id: req.body._id}, ticket);
        res.json({
            'status': '1', 
            'msg': 'ticket modificado'
        })
    }catch(error){
        res.status(400).json({ 
            'status': '0', 
            'msg': 'Error procesando la operacion' 
        }) 
    }
}

ticketCtrl.deleteTicket = async (req, res) =>{
    try{
        await Ticket.deleteOne({_id: req.params.id});
        res.json({ 
            status: '1', 
            msg: 'ticket removed'
        }) 
    }catch (error) { 
        res.status(400).json({ 
            'status': '0', 
            'msg': 'Error procesando la operacion' 
        }) 
    } 
}

ticketCtrl.getTicketPorCategoriaEspectador = async(req, res)=>{

    try{
        const { categoriaEspectador } = req.params; // Asegúrate de que el parámetro se llama correctamente en la ruta
        const ticketPorCategoriaEspectador = await Ticket.find({ categoriaEspectador: categoriaEspectador}); // Utiliza el valor extraído de req.params
        res.json(ticketPorCategoriaEspectador);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener tickets por categoria' });
      }
}


ticketCtrl.getTicketPorCategoriaEspectador = async (req, res) => {
    try {
      const { categoriaEspectador } = req.params;
      const ticketPorCategoriaEspectador = await Ticket.find({ categoriaEspectador: categoriaEspectador });
      res.json(ticketPorCategoriaEspectador);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al obtener tickets por categoría' });
    }
  };
  

ticketCtrl.getUnTicket = async (req, res)=>{
    const ticket = await Ticket.findById(req.params.id).populate('espectador');
    res.json(ticket);
}

module.exports = ticketCtrl;