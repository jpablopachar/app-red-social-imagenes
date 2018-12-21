const helpers = {};

helpers.numeroAleatorio = () => {
  // Retorna una palabra de 6 caracteres entre números y letras
  const posible = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let numeroAleatorio = 0;

  for (let i = 0; i < 6; i += 1) {
    numeroAleatorio += posible.charAt(Math.floor(Math.random() * posible.length));
  }

  return numeroAleatorio;
};

module.exports = helpers;
