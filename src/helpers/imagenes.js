const { Imagen } = require('../models');

module.exports = {
  async popular() {
    // Encuentra 9 Imagenes y los ordena en base al número de likes
    const imagenes = await Imagen.find().limit(9).sort({ meGustas: -1 });

    return imagenes;
  },
};
