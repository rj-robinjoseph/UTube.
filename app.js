var menuIcon = document.querySelector(".menu-icon");
var sideBar = document.querySelector(".sidebar");
var container = document.querySelector(".container");
var slider = document.querySelector(".slider");

menuIcon.addEventListener("click", () => {
  slider.classList.toggle("large-slider");
  container.classList.toggle("large-container");
  sideBar.classList.toggle("small-sidebar");
});

// Slider

$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider-nav",
});
$(".slider-nav").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  dots: false,
  fade: false,
  focusOnSelect: true,
  autoplay: true,
  autoplaySpeed: 3000,
});
$("a[data-slide]").click(function (e) {
  e.preventDefault();
  var slideno = $(this).data("slide");
  $(".slider-nav").slick("slickGoTo", slideno + 1);
});

$(".slider-nav").slick({
  autoplay: true,
  autoplaySpeed: 3000,
});
