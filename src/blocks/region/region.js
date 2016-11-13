$('.region__button--west').click(function(e) {
  e.preventDefault();
  $('.region__map--west').hide();
  $('.region__map--east').fadeIn('fast');
  $('.region__cities--west').hide();
  $('.region__cities--east').fadeIn('fast').css('display', 'flex');
});

$('.region__button--east').click(function(e) {
  e.preventDefault();
  $('.region__map--east').hide();
  $('.region__map--west').fadeIn('fast');
  $('.region__cities--east').hide();
  $('.region__cities--west').fadeIn('fast').css('display', 'flex');
});