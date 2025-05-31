document.querySelectorAll('.faq__item').forEach(elem => {
    elem.addEventListener('click',  () => {
        elem.classList.toggle('faq__item--opened');
    })
});