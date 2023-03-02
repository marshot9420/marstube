import "../scss/styles.scss";
import "../img/logo.png";
import "../img/marstube.png";
import "../img/404.jpg";

const headerAvatar = document.querySelector(".header__avatar");
const hiddenMenu = document.getElementById("hidden-menu");

hiddenMenu.style.display = "none";

const handleHiddenMenu = () => {
  hiddenMenu.style.display =
    hiddenMenu.style.display === "none" ? "block" : "none";
};

headerAvatar.addEventListener("click", handleHiddenMenu);
