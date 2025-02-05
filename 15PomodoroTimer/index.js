const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const reset = document.querySelector('#reset');
const timer = document.querySelector('.timer');
let totalTime = 1500;
let validTimer;

function formateTimer(){
    let min = Math.floor(totalTime / 60);
    let sec = totalTime % 60;
    let time = `${min.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`;
    timer.innerHTML = time;
}

function updateTime(){
    validTimer = setInterval(() => {
        totalTime--;
        if(totalTime > -1){
            formateTimer();
        }
    }, 10);
    
}

start.addEventListener("click", () => {
    updateTime();
});
stop.addEventListener('click', () => {
    clearInterval(validTimer);
})
reset.addEventListener('click', () => {
    clearInterval(validTimer);
    timer.innerHTML = '25:00';
    totalTime = 1500;
})