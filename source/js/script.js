var menuButton = document.querySelector(".nav__button");
var mainMenu = document.querySelector(".main-menu");
var beforeButton = document.querySelector(".slider__button-before");
var afterButton = document.querySelector(".slider__button-after");
var beforeSlide = document.querySelector(".slider__image-before");
var afterSlide = document.querySelector(".slider__image-after");
var map = document.querySelector("img.contacts__map");
var frame = document.querySelector("iframe.contacts__map");
var form = document.querySelector(".modal-form");
var formButton = document.querySelector(".main-form__button");
var nameInput = document.querySelector(".cat-options__input[name=name]");
var weightInput = document.querySelector(".cat-options__input[name=weight]");
var emailInput = document.querySelector(".owner-contacts__input[name=email]");
var telInput = document.querySelector(".owner-contacts__input[name=tel]");

menuButton.classList.remove("nav__button--open");
mainMenu.classList.add("main-menu--closed");
map.classList.add("contacts__map--hidden");
frame.classList.remove("contacts__map--hidden");

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

var valid = function (evt) {
  console.log(nameInput);
  if (!nameInput.value) {
    var nameInput = document.querySelector(".cat-options__input[name=name]")
    console.log("Еба ты боженька")
    nameInput.classList.add("input-error");
  } else {
    console.log ("Это на Элсэ")
    evt.submit();
  }
};
