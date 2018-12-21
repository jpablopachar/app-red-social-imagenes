const fs = require('fs-extra');
const path = require('path');

const { numeroAleatorio } = require('../helpers/libs');

const controller = {};

controller.index = (req, res) => {
  // res.render('index');
};

controller.agregar = async (req, res) => {
  const imagenUrl = numeroAleatorio();
  console.log(imagenUrl);
  // Dirección donde se encuentra la imágen
  const imagenTempPath = path.extname(req.file.path);
  // Extensión de la imágen
  const ext = path.extname(req.file.originalname).toLowerCase();
  // Dirección donde se desea ubicar la imágen para obtener y mostrar
  const objetivoPath = path.resolve(`src/public/upload/test${ext}`);

  if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif') {
    await fs.rename(imagenTempPath, objetivoPath);
  }

  res.send('recibido');
};

module.exports = controller;
