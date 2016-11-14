$('.slider').slick({
  slidesToShow: 4,
  infinite: false,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false
      }
    }
  ]
});