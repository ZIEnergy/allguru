$('.header__menu-button').click(function(e) {
  e.preventDefault();
  $(this).toggleClass('header__menu-button--active');
  $('.header__content').fadeToggle('fast').css('display', 'flex');
});