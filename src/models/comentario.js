const { Schema, model } = require('mongoose');

const ComentarioSchema = new Schema({
  imagenId: { type: Schema.ObjectId },
  correo: { type: String },
  nombre: { type: String },
  gravatar: { type: String },
  comentario: { type: String },
  fechaCreacion: { type: Date, default: Date.now() },
});

module.exports = model('Comentario', ComentarioSchema);
