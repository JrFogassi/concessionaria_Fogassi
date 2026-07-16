const hamburguer = document.querySelector('.hamburguer');
const navLinks = document.querySelector('.nav-links');
let menuAberto = false;

hanburguer.addEventListener('click', () => {
    if (menuAberto == false){
        navLinks.style.display = "block";
        menuAberto = true;
    } else if (menuAberto == true) {
        navLinks.style.display = "none";
        menuAberto = false;
    }
});