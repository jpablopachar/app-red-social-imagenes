const fs = require('fs-extra');
const path = require('path');

const { Imagen } = require('../models');
const { numeroAleatorio } = require('../helpers/libs');

const controller = {};

controller.index = (req, res) => {
  // res.render('index');
};

controller.agregar = (req, res) => {
  const guardarImagen = async () => {
    const imagenUrl = numeroAleatorio();
    const imagenes = await Imagen.find({ nombreArchivo: imagenUrl });

    if (imagenes.length > 0) {
      guardarImagen();
    } else {
      console.log(imagenUrl);
      // Dirección donde se encuentra la imágen
      const imagenTempPath = req.file.path;
      // Extensión de la imágen
      const ext = path.extname(req.file.originalname).toLowerCase();
      // Dirección donde se desea ubicar la imágen para obtener y mostrar
      const objetivoPath = path.resolve(`src/public/upload/${imagenUrl}${ext}`);

      if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif') {
        await fs.rename(imagenTempPath, objetivoPath);

        const nuevaImagen = new Imagen({
          titulo: req.body.titulo,
          descripcion: req.body.descripcion,
          nombreArchivo: imagenUrl + ext,
        });
        const imagenAlmacenada = await nuevaImagen.save();

        // res.redirect('/imagenes');
        res.send('recibido');
      } else {
        // Elimina las imágenes de la carpeta temp del servidor
        await fs.unlink(imagenTempPath);
        res.status(500).json({ error: 'Se permiten sólo imágenes' });
      }
    }
  };

  guardarImagen();
};

module.exports = controller;
