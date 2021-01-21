var menuButton = document.querySelector(".nav__button");
var mainMenu = document.querySelector(".main-menu");
var beforeButton = document.querySelector(".slider__button-before");
var afterButton = document.querySelector(".slider__button-after");
var beforeSlide = document.querySelector(".slider__image-before");
var afterSlide = document.querySelector(".slider__image-after");
var map = document.querySelector("img.map__image");
var frame = document.querySelector("iframe.map__image");
var formButton = document.querySelector(".main-form__button");
var nameInput = document.querySelector(".cat-options__input[name=name]");

menuButton.classList.remove("nav__button--open");
menuButton.classList.remove("nav__button--nojs");
mainMenu.classList.add("main-menu--closed");
map.classList.add("map__image--hidden");
frame.classList.remove("map__image--hidden");

menuButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  mainMenu.classList.toggle("main-menu--closed");
  menuButton.classList.toggle("nav__button");
  menuButton.classList.toggle("nav__button--open");
});

if (menuButton.classList.contains("nav__button--closed")) {
  mainMenu.classList.add("main-menu--closed");
};


if (afterButton) {
  afterButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    afterSlide.classList.remove("slider__image-after--closed");
    beforeSlide.classList.add("slider__image-before--closed");
  });
}

if (beforeButton) {
  beforeButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    beforeSlide.classList.remove("slider__image-before--closed");
    afterSlide.classList.add("slider__image-after--closed");
  });
};

var valid = function (evt) {
  var nameInput = document.querySelector(".cat-options__input[name=name]")
  var weightInput = document.querySelector(".cat-options__input[name=weight]");
  var emailInput = document.querySelector(".owner-contacts__input[name=email]");
  var telInput = document.querySelector(".owner-contacts__input[name=tel]");
  var inputIcon = document.querySelector(".owner-contacts__icon");

  if (!nameInput.value) {
    alert("Заполните обязательные поля");
    nameInput.classList.add("text-input--error");
  } else if (!weightInput.value) {
    alert("Заполните обязательные поля");
    weightInput.classList.add("text-input--error");
  } else if (!emailInput.value) {
    alert("Заполните обязательные поля");
    inputIcon.classList.add("owner-contacts__icon--error");
    emailInput.classList.add("text-input--error");
  } else if (!telInput.value) {
    alert("Заполните обязательные поля");
    inputIcon.classList.add("owner-contacts__icon--error");
    telInput.classList.add("text-input--error");
  } else {
    evt.submit();
  }
};
