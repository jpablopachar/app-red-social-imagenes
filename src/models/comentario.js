const { Schema, model } = require('mongoose');

const ComentarioSchema = new Schema({
  imagenId: { type: Schema.ObjectId },
  correo: { type: String },
  nombre: { type: String },
  gravatar: { type: String },
  comentario: { type: String },
  fechaCreacion: { type: Date, default: Date.now() },
});

ComentarioSchema.virtual('imagen').set(function(imagen) {
  this._imagen = imagen;
}).get(function() {
  return this._imagen;
});

module.exports = model('Comentario', ComentarioSchema);
