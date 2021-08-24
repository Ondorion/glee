$(function () {


  $('.details-slider__inner').slick({
    slidesToShow: 4,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.png" alt=""></button>'

  });

  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false
  });
  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true
  });




  $('.filter-prise__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.filter-prise__from').text(data.from);
      $('.filter-prise__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-prise__from').text(data.from);
      $('.filter-prise__to').text(data.to);
    },
  })


  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });

  $('.product-item__star').rateYo({
    readOnly: true,
    starWidth: "17px",
    normalFill: "#d6d6d6",
    spacing: "7px"
  });

  $('.star').rateYo({
    readOnly: true,
    starWidth: "11px",
    normalFill: "#d6d6d6",
    spacing: "7px"
  });

  $('.product-item__num').styler();



  var mixer = mixitup('.product-info__content');
  var mixer = mixitup('.design__content');
});