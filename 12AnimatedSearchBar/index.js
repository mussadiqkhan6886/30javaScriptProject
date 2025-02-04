let container = document.querySelector('.container');
let search = document.querySelector('.fa-search');

search.addEventListener('click', () => {
    container.classList.toggle('active');
})