const hamburguer = document.querySelector(".hamburguer");
const navLinks = document.querySelector(".nav-links");
let menuAberto = false;

hamburguer.addEventListener("click", () => {
  if (menuAberto == false) {
    navLinks.classList.add("ativo");
    menuAberto = true;
  } else if (menuAberto == true) {
    navLinks.classList.remove("ativo");
    menuAberto = false;
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    navLinks.classList.remove("ativo");
    menuAberto = false;
  }
});
