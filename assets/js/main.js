$('.google-review__items').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:false
  
});


$('.google-review__arrow-left').click(function () {
    $(this).parent().parent().find('.slick-slider').slick('slickPrev');
});
$('.google-review__arrow-right').click(function () {
    $(this).parent().parent().find('.slick-slider').slick('slickNext');
});