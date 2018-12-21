const router = require('express').Router();

const indexController = require('../controllers/index');
const imagenController = require('../controllers/imagen');

module.exports = (app) => {
  router.get('/', indexController.index);
  router.post('/imagenes', imagenController.agregar);

  app.use(router);
};
