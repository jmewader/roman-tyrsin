$(".slider").slick({
  infinite: true,
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: "<img src='../img/icons/arrow-right.svg' class='prev' alt='1'>",
  nextArrow: "<img src='../img/icons/arrow-right.svg' class='next' alt='2'>",
});

//menu-mobile
document.querySelector(".second-button").addEventListener("click", function () {
  document.querySelector(".animated-icon2").classList.toggle("open");
});

