module.exports = (app) => {
  /*                  Ajustes                     */
  // Usa el puerto establecido o usa el puerto 3000
  app.set('port', process.env.PORT || 3000);

  return app;
};
