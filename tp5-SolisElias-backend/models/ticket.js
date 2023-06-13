const mongoose = require('mongoose');
const { Schema } = mongoose;
const espectador = require('./espectador');
const TicketSchema = new Schema({
    categoriaEspectador: { type: String, required: true }, // categoría del espectador puede ser: e = Extranjero, l = local.
    fechaCompra: { type: String, required: true },
    espectador: { type:Schema.Types.ObjectId,ref: espectador,required: true },
    
})
module.exports = mongoose.models.Ticket|| mongoose.model('Ticket', TicketSchema);





