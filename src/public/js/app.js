$('#btn-meGusta').click(function(e) {
  e.preventDefault();

  let imagenId = $(this).data('id');

  $.post('/imagenes/' + imagenId + '/meGusta').done(datos => {
    console.log(datos);
    $('.likes-count').text(datos.meGustas);
  });
});
