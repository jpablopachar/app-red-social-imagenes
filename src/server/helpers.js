const moment = require('moment');

const helpers = {};

helpers.tiempoAtras = (fechaCreacion) => {
  // A partir de la fecha me devuelve el tiempo en minutos
  return moment(fechaCreacion).startOf('minute').fromNow();
}

module.exports = helpers;
