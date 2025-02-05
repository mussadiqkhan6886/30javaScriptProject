const kits = ['crash', 'kick', 'snare', 'tom'];
let container = document.querySelector('.drums-div');

kits.forEach((kit) => {
    let button = document.createElement('button');
    button.classList.add('button');
    button.textContent = kit;
    container.appendChild(button);
    button.style.backgroundImage = `url(./images/${kit}.jpg)`;

    let audio = document.createElement('audio');
    audio.src = `./sounds/${kit}.mp3`;
    container.appendChild(audio);

    button.addEventListener('click', () => {
        audio.play();
        button.style.transform = 'scale(0.94)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 300);
    })

    window.addEventListener('keydown', (e) => {
        if(e.key == kit.slice(0, 1)){
            audio.play();
            button.style.transform = 'scale(0.94)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 300);
        }
    })

})