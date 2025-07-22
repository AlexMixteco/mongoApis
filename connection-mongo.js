const mongoose = require("mongoose");
require('dotenv').config();

// Conexión a MongoDB
const mongoUrl = process.env.MONGO_URL;
mongoose.connect(mongoUrl);


const usersSchema = new mongoose.Schema({
  nombre: String,
  apellido: String,
  correo: String,
  usuario: String,
  contrasenia: String,
  tipo: String,
  dispositivoIds: [String] 
}, { versionKey: false });


const dispositivosSchema = new mongoose.Schema({
  id: String,          
  ubicacion: String,    

}, { versionKey: false });


const medicionesSchema = new mongoose.Schema({
  valorAire: Number,
  valorHumedad: Number,
  valorTemperatura: Number,
  probabilidadLluvia: String,
  fechaHora: Date,
  dispositivoId: String 
}, { versionKey: false });

module.exports = {
  usuarios: mongoose.model("usuarios", usersSchema),
  dispositivos: mongoose.model("dispositivos", dispositivosSchema),
  mediciones: mongoose.model("mediciones", medicionesSchema)
};
