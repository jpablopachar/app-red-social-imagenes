const exphbs = require('express-handlebars');
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

  /*                    Rutas                     */

  /*             Manejador de errores             */

  return app;
};
