const mongoose = require('mongoose');
const path = require('path');

const { Schema } = mongoose;

const ImagenSchema = new Schema({
  titulo: { type: String },
  descripcion: { type: String },
  nombreArchivo: { type: String },
  vistas: { type: Number, default: 0 },
  meGustas: { type: Number, default: 0 },
  fechaCreación: { type: Date, default: Date.now() },
});

ImagenSchema.virtual('idUnico').get(function () {
  return this.nombreArchivo.replace(path.extname(this.nombreArchivo), '');
});

module.exports = mongoose.model('Imagen', ImagenSchema);
