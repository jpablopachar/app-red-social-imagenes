const { Comentario, Imagen } = require('../models');

async function contadorImagenes() {
  // Devuelve el total de imágenes
  return Imagen.countDocuments();
}

async function contadorComentarios() {
  // Devuelve el total de comentarios
  return Comentario.countDocuments();
}

async function contadorTotalVistasImagenes() {
  // Devuelve el total de vistas de todas las imágenes
  const resultado = await Imagen.aggregate([{
    $group: {
      _id: '1',
      totalVistas: { $sum: '$vistas' },
    },
  }]);

  return resultado[0].totalVistas;
}

async function contadorTotalMeGustas() {
  // Devuelve el total de likes de todas las imágenes
  const resultado = await Imagen.aggregate([{
    $group: {
      _id: '1',
      totalMeGustas: { $sum: '$meGustas' },
    },
  }]);

  return resultado[0].totalMeGustas;
}

module.exports = async () => {
  // Ejecuta varias funciones asyncronas en paralelo y su valor lo devuelve en un arreglo
  const resultados = await Promise.all([
    contadorImagenes(),
    contadorComentarios(),
    contadorTotalVistasImagenes(),
    contadorTotalMeGustas(),
  ]);

  return {
    imagenes: resultados[0],
    comentarios: resultados[1],
    vistas: resultados[2],
    meGustas: resultados[3],
  };
};
