$('.region__button--west').click(function(e) {
  e.preventDefault();
  $('.region__map--west').hide();
  $('.region__map--east').fadeIn('fast');
});

$('.region__button--east').click(function(e) {
  e.preventDefault();
  $('.region__map--east').hide();
  $('.region__map--west').fadeIn('fast');
});