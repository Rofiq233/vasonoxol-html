$('.google-review__items').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false

});


$('.google-review__arrow-left').click(function () {
  $(this).parent().parent().find('.slick-slider').slick('slickPrev');
});
$('.google-review__arrow-right').click(function () {
  $(this).parent().parent().find('.slick-slider').slick('slickNext');
});


$(document).ready(function () {
  // Set first item active by default
  $(".faq__title").first().addClass("active");
  $(".faq__item-content").first().show();

  $(".faq__title").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).parent().find(".faq__item-content").slideUp();
    } else {
      $(".faq__title").removeClass("active");
      $(".faq__item-content").slideUp();
      $(this).addClass("active");
      $(this).parent().find(".faq__item-content").slideDown();
    }
  });
});
