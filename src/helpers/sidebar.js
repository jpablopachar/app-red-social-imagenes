const Estadisticas = require('./estadisticas');
const Imagenes = require('./imagenes');
const Comentarios = require('./comentarios');

module.exports = async (vistaModelo) => {
  const resultados = await Promise.all([
    Estadisticas(),
    Imagenes.popular(),
    Comentarios.masReciente(),
  ]);

  vistaModelo.sidebar = {
    estadisticas: resultados[0],
    popular: resultados[1],
    comentarios: resultados[2],
  };

  return vistaModelo;
};
