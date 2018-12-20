const express = require('express');
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');

const help = require('./helpers');

module.exports = (app) => {
  /*                  Ajustes                     */
  // Usa el puerto establecido o usa el puerto 3000
  app.set('port', process.env.PORT || 3000);

  /*                   Vistas                      */
  app.set('views', path.join(__dirname, 'views'));
  app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    // helpers: require('./helpers'),
    helpers: help,
  }));
  app.set('view engine', 'hbs');

  /*                 Middleware                   */
  app.use(morgan('dev'));
  // Coloca una sola imagen en la ruta establecida
  app.use(multer({ dest: path.join(__dirname, '../public/upload/temp')}).single('imagen'));
  // Recibe los datos que vienen desde formularios
  app.use(express.urlencoded({ extended: false }));
  // Convierte los objetos a json
  app.use(express.json());

  /*                    Rutas                     */

  /*             Manejador de errores             */

  return app;
};
