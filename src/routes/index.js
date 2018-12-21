const router = require('express').Router();

const indexController = require('../controllers/index');

module.exports = (app) => {
  router.get('/', indexController.index);

  app.use(router);
};
