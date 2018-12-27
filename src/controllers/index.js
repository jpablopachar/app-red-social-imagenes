const { Imagen } = require('../models');
const sidebar = require('../helpers/sidebar');

const controller = {};

controller.index = async (req, res) => {
  // Busca imágenes y almacena de forma descendente
  const imagenes = await Imagen.find().sort({ fechaCreacion: -1 });
  let vistaModelo = { imagenes: [] };

  vistaModelo.imagenes = imagenes;
  vistaModelo = await sidebar(vistaModelo);
  // console.log(vistaModelo.sidebar.comentarios);
  res.render('index', vistaModelo);
};

module.exports = controller;
