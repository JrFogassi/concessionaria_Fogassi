const slidesContainer = document.getElementById('slides');

const totalSlides = document.querySelectorAll('.slide').length;

const indicadoresContainer = document.getElementById('indicators');

const carrossel = document.getElementById('bikes');

let indiceAtual = 0;
let autoplay;
const INTERVALO = 4000;

for (let i = 0; i < totalSlides; i++) {
    const ponto = document.createElement('div');
    ponto.classList.add('ponto');
    if (i === 0) ponto.classList.add('ativo');
    ponto.addEventListener('click', () => irParaSlide(i));
    indicadoresContainer.appendChild(ponto);
}

function atualizarCarrossel() {
    slidesContainer.style.transform = `translateX(-${indiceAtual * 100}%)`;

    document.querySelectorAll('.ponto').forEach((ponto, i) => {
        ponto.classList.toggle('ativo', i === indiceAtual);
    });
}

function mudarSlideSemReiniciar(direcao) {
    indiceAtual = (indiceAtual + direcao + totalSlides) % totalSlides;
    atualizarCarrossel();
}

function iniciarAutoplay() {
    autoplay = setInterval(() => {
        mudarSlideSemReiniciar(1);
    }, INTERVALO);
}

function reiniciarAutoplay() {
    clearInterval(autoplay);
    iniciarAutoplay();
}

function mudarSlide(direcao) {
    indiceAtual = (indiceAtual + direcao + totalSlides) % totalSlides;
    atualizarCarrossel();
    reiniciarAutoplay();
}

function irParaSlide(indice) {
    indiceAtual = indice;
    atualizarCarrossel();
    reiniciarAutoplay();
}

carrossel.addEventListener('mouseenter', () => clearInterval(autoplay));
carrossel.addEventListener('mouseleave', iniciarAutoplay);

iniciarAutoplay();