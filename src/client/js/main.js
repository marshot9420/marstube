import "../scss/styles.scss";
import "../img/logo.png";
import "../img/marstube.png";
import "../img/404.jpg";

const hiddenBtn = document.querySelector(".hidden__btn");
const hiddenMenu = document.getElementById("hidden-menu");

hiddenMenu.style.display = "none";

const handleHiddenMenu = () => {
  hiddenMenu.style.display =
    hiddenMenu.style.display === "none" ? "block" : "none";
};

hiddenBtn.addEventListener("click", handleHiddenMenu);
