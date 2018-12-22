const md5 = require('md5');
const fs = require('fs-extra');
const path = require('path');

const { Imagen, Comentario } = require('../models');
const { numeroAleatorio } = require('../helpers/libs');

const controller = {};

controller.index = async (req, res) => {
  // Busca y almacena la imagen que coincida con su nombre
  const imagen = await Imagen.findOne({ nombreArchivo: { $regex: req.params.imagenId } });

  const comentarios = await Comentario.find({ imagenId: imagen._id });
  res.render('imagen', { imagen, comentarios });
};

controller.agregar = (req, res) => {
  const guardarImagen = async () => {
    const imagenUrl = numeroAleatorio();
    const imagenes = await Imagen.find({ nombreArchivo: imagenUrl });

    if (imagenes.length > 0) {
      guardarImagen();
    } else {
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

        res.redirect('/imagenes/', imagenUrl);
      } else {
        // Elimina las imágenes de la carpeta temp del servidor
        await fs.unlink(imagenTempPath);
        res.status(500).json({ error: 'Se permiten sólo imágenes' });
      }
    }
  };

  guardarImagen();
};

controller.comentar = async (req, res) => {
  const imagen = await Imagen.findOne({ nombreArchivo: { $regex: req.params.imagenId } });

  if (imagen) {
    const nuevoComentario = new Comentario(req.body);

    nuevoComentario.gravatar = md5(nuevoComentario.correo);
    nuevoComentario.imagenId = imagen._id;

    await nuevoComentario.save();
    res.redirect('/imagenes/', imagen.idUnico);
  }
};

module.exports = controller;
