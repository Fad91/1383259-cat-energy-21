let menuButton = document.querySelector(".nav__button");
let mainMenu = document.querySelector(".main-menu");
let beforeButton = document.querySelector(".slider__button-before");
let afterButton = document.querySelector(".slider__button-after");
let beforeSlide = document.querySelector(".slider__image-before");
let afterSlide = document.querySelector(".slider__image-after");

mainMenu.classList.add("main-menu--closed");

menuButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  mainMenu.classList.toggle("main-menu--closed");
});

if(menuButton.classList.contains("nav__button--closed")) {
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
