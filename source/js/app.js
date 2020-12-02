let menuButton = document.querySelector(".nav__button");
let mainMenu = document.querySelector(".main-menu");

mainMenu.classList.add("main-menu--closed");

menuButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  mainMenu.classList.toggle("main-menu--closed");
});
