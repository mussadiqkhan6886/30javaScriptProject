let img = document.querySelector(".backImg");


window.addEventListener('scroll', () => {
    img.style.opacity = `${1 - window.pageYOffset / 900}`;
    img.style.backgroundSize = `${160 - window.pageYOffset / 12}%`;
})