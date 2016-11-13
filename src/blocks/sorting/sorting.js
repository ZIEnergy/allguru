$('.sorting__view-item--long').click(function(e) {
  e.preventDefault();
  $('.content__items').removeClass('content__items--short');
  $('.item').removeClass('item--short');
});

$('.sorting__view-item--short').click(function(e) {
  e.preventDefault();
  $('.content__items').addClass('content__items--short');
  $('.item').addClass('item--short');
});