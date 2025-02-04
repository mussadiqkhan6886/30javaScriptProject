let container = document.querySelector('.image-container');
let prevButton = document.querySelector('#prev');
let nextButton = document.querySelector('#next');
let x = 0;
let timer;

prevButton.addEventListener('click', () => {
    x += 45;
    clearInterval(timer);
    updateGallery();
})

nextButton.addEventListener('click', () => {
  x -= 45;
  clearInterval(timer);
  updateGallery();  
})

function updateGallery() {
    container.style.transform = `perspective(1000px) rotateY(${x}deg)`;
    timer = setTimeout(() => {
        x -= 45;
        updateGallery();
    }, 3000);
}

updateGallery();