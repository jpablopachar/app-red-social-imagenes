const { Imagen } = require('../models');

const controller = {};

controller.index = async (req, res) => {
  // Busca imágenes y almacena de forma descendente
  const imagenes = await Imagen.find().sort({ fechaCreacion: -1 });
  res.render('index', { imagenes });
};

module.exports = controller;
