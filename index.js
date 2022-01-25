const hamburger = document.getElementById("menu-btn");
const listWrapper = document.querySelector(".list-wrapper");
const closeMenu = document.getElementById("close");

hamburger.addEventListener("click", () => {
  listWrapper.classList.toggle("show");
});

closeMenu.addEventListener("click", () => {
  listWrapper.classList.remove("show");
});
