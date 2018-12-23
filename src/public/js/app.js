$('#mostrar-comentario').hide();

$('#btn-palanca-comentario').click(function(e) {
  e.preventDefault();

  $('#mostrar-comentario').slideToggle();
});

$('#btn-meGusta').click(function(e) {
  e.preventDefault();

  let imagenId = $(this).data('id');

  $.post('/imagenes/' + imagenId + '/meGusta').done(datos => {
    console.log(datos);
    $('.likes-count').text(datos.meGustas);
  });
});

$('#btn-eliminar').click(function(e) {
  e.preventDefault();

  let $this = $(this);

  const respuesta = confirm('¿Estás seguro de eliminar esta imágen?');

  if (respuesta) {
    let imagenId = $this.data('id');

    $.ajax({
      url: '/imagenes/' + imagenId,
      type: 'DELETE',
    }).done(function(resultado) {
      $this.removeClass('btn-danger').addClass('btn-success');
      $this.find('i').removeClass('fa-times').addClass('fa-check');
      $this.append('<span>Eliminado!</span>');
    });
  }
});
