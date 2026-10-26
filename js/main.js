//Esto basciamente espera a que la pagina carge 
document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.getElementById('lang-btn');
    let currentLang = 'es'; 
    //Cambia el idioma de los elementos con el atributo que se ah dado
    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';

        const translatableElements = document.querySelectorAll('[data-es][data-en]');

        translatableElements.forEach(element => {
            element.textContent = element.getAttribute(`data-${currentLang}`);
        });
    });
});