$('.gallery__small-item').click(function(e) {
  e.preventDefault();
  $('.gallery__big-picture').attr('src', $(this).data('content'));
  $('.gallery__big-video').hide();
  $('.gallery__big-picture').show();
});

$('.gallery__small-item--video').click(function(e) {
  e.preventDefault();
  $('.gallery__big-video').attr('src', $(this).data('content'));
  $('.gallery__big-picture').hide();
  $('.gallery__big-video').show();
});