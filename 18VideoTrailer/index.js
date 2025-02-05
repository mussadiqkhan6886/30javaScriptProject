const button = document.querySelector("#button");
const infoContainer = document.querySelector('.container-info');
const trailerContainer = document.querySelector('.container-video');
const close = document.querySelector('.fa-close');
const video = document.querySelector("video");

button.addEventListener('click', () => {
    infoContainer.classList.add('show');
    trailerContainer.classList.add('showVideo');
});
close.addEventListener('click', () => {
    infoContainer.classList.remove('show');
    trailerContainer.classList.remove('showVideo');
    video.pause();
    video.currentTime = 0;
})
