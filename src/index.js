const express = require('express');

const config = require('./server/config');

/*               Base de datos                  */
require('./databases/db');

const app = config(express());

// Escucha en el puerto establecido
app.listen(app.get('port'), () => {
  console.log('Servidor en puerto', app.get('port'));
});
