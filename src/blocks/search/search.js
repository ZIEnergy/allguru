$('.search__region').change(function() {
  $('.search__region option').each(function() {
    if($('.search__other-city').is(':selected')) {
      $('.search__region-link').click();
    }
  })
});