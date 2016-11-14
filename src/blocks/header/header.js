$('.header__menu-button').click(function() {
  $(this).toggleClass('header__menu-button--active');
  $('.header__content').fadeToggle('fast').css('display', 'flex');
});