$(function(){

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

  $('.star').rateYo({
    readOnly: true,
    starWidth: "11px",
    normalFill: "#d6d6d6",
    spacing: "7px"
  });
  


  var mixer = mixitup('.product-info__content');
  var mixer = mixitup('.design__content');
});