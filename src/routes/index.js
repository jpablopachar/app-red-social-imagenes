const router = require('express').Router();

const indexController = require('../controllers/index');
const imagenController = require('../controllers/imagen');

module.exports = (app) => {
  router.get('/', indexController.index);
  router.get('/imagenes/:imagenId', imagenController.index);
  router.post('/imagenes', imagenController.agregar);
  router.post('/imagenes/:imagenId/comentario', imagenController.comentar);

  app.use(router);
};
