let container = document.querySelector('.image-container');
let prevButton = document.querySelector('#prev');
let nextButton = document.querySelector('#next');
let modal = document.querySelector('#modal-img');
let imgs = document.querySelectorAll('.img');
let mark = document.querySelector('.fa-xmark');
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

imgs.forEach(img => {
    img.addEventListener('click', () => {
        document.querySelector('.modal').style.display = 'flex';
        modal.src = img.src;
        clearInterval(timer);
    })
})
mark.addEventListener('click', () => { 
    closeImage();
})
document.querySelector('.modal').addEventListener('click', (e) => {
    if(e.target == document.querySelector('.modal')){
        closeImage();
    }
})
function closeImage(){
    document.querySelector('.modal').style.display = 'none';
    modal.src = '';
    setTimeout(updateGallery, 2000);
}

function updateGallery() {
    container.style.transform = `perspective(1000px) rotateY(${x}deg)`;
    timer = setTimeout(() => {
        x -= 45;
        updateGallery();
    }, 3000);
}

updateGallery();