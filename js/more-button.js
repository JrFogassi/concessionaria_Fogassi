const btnCta = document.getElementById('btn-cta');
const secaoAlvo = document.getElementById('more');

btnCta.addEventListener('click', (evento) => {
    evento.preventDefault();

    secaoAlvo.scrollIntoView({ behavior: 'smooth'});
});