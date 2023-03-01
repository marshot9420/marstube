import "../scss/styles.scss";
import "../img/logo.png";
import "../img/marstube.png";
import "../img/404.jpg";

const headerAvatar = document.querySelector(".header__avatar");
const hiddenMenu = document.getElementById("hidden-menu");

headerAvatar.addEventListener("click", () => {
  hiddenMenu.style.display =
    hiddenMenu.style.display === "none" ? "block" : "none";
});
