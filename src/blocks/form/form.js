$('.form__category-item').click(function(e) {
  e.preventDefault();
  $('.form__category-item').removeClass('form__category-item--active');
  $(this).addClass('form__category-item--active');
});

$('.form__ad-settings-item').click(function(e) {
  e.preventDefault();
  $('.form__ad-settings-item').removeClass('form__ad-settings-item--active');
  $(this).addClass('form__ad-settings-item--active');
});