// BOTONES
function irAlFormulario() {
    window.location.href = '/formularioInicio.html'; 
}
function irAZonaGamer(){
    window.location.href = '/zonaGamer.html';
}
function registro(){
    window.location.href = '/formularioNuevoRegistro.html';
}
function irASobreNosotros(){
    window.location.href = '/sobre-nosotros.html';
}
// HASTA AQUÍ BOTONES


// SLIDER SOBRE NOSOTROS
let currentSlide = 0; // Mantiene el índice de la diapositiva actual
const slides = document.querySelectorAll('.slide'); // Obtiene todas las diapositivas
const totalSlides = slides.length; // Total de diapositivas

// Función para mover las diapositivas
function moveSlide(step) {
    currentSlide += step; // Avanza o retrocede el índice

    // Si estamos al inicio, volvemos al final (circular)
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    // Si estamos al final, volvemos al inicio (circular)
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    // Mueve las diapositivas visualmente
    const slidesContainer = document.querySelector('.slides');
    const offset = -currentSlide * 100; // Calcula el desplazamiento de las diapositivas

    slidesContainer.style.transform = `translateX(${offset}%)`; // Aplica el desplazamiento
}

// Opcional: Puedes llamar a la función para iniciar el slider de forma predeterminada
// Si lo necesitas, de esta manera el slider no aparece vacío al principio:
document.addEventListener('DOMContentLoaded', () => {
    // Inicializa el slider en la primera diapositiva
    const slidesContainer = document.querySelector('.slides');
    const offset = -currentSlide * 100;
    slidesContainer.style.transform = `translateX(${offset}%)`;
});
// HASTA AQUI BOTONES SOBRE NOSOTROS

