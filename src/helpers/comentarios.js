const { Comentario, Imagen } = require('../models');

module.exports = {
  async masReciente() {
    // Encuentra 9 Imagenes y los ordena en base al número de likes
    const comentarios = await Comentario.find().limit(5).sort({ fechaCreacion: -1 });

    // console.log('===> ', comentarios);

    for (const comentario of comentarios) {
      // Busca una imagen por su id en base al imagenId del comentario
      const imagen = await Imagen.findOne({ _id: comentario.imagenId });

      comentario.imagen = imagen;
    }

    return comentarios;
  },
};
