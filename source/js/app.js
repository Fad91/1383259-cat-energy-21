var menuButton = document.querySelector(".nav__button");
var mainMenu = document.querySelector(".main-menu");
var beforeButton = document.querySelector(".slider__button-before");
var afterButton = document.querySelector(".slider__button-after");
var beforeSlide = document.querySelector(".slider__image-before");
var afterSlide = document.querySelector(".slider__image-after");

mainMenu.classList.add("main-menu--closed");

menuButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  mainMenu.classList.toggle("main-menu--closed");
  menuButton.classList.toggle("nav__button");
  menuButton.classList.toggle("nav__button--open");
});

if (menuButton.classList.contains("nav__button--closed")) {
  mainMenu.classList.remove("main-menu--closed");
};

afterButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  afterSlide.classList.remove("slider__image-after--closed");
  beforeSlide.classList.add("slider__image-before--closed");
});

beforeButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  beforeSlide.classList.remove("slider__image-before--closed");
  afterSlide.classList.add("slider__image-after--closed");
});
