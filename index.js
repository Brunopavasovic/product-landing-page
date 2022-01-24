const hamburger = document.getElementById("menu-btn");
const list = document.querySelector("ul");

hamburger.addEventListener('click', () => {
    list.classList.toggle('show');
}
)

  