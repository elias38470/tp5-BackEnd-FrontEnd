const mongoose = require('mongoose');
const { Schema } = mongoose;
const EspectadorSchema = new Schema({
    apellido: { type: String, required: true },
    nombre: { type: String, required: true },
    dni: { type: String, required: true },
    email: { type: String, required: true },
})
module.exports = mongoose.models.espectador|| mongoose.model('Espectador', EspectadorSchema);


