let hourEl = document.querySelector('.hour');
let minEl = document.querySelector('.min');
let secEl = document.querySelector('.sec');

function updateClock(){
    let currentTime = new Date();
    let hour = currentTime.getHours();
    let min = currentTime.getMinutes();
    let sec = currentTime.getSeconds();
    let hourDeg = ( hour / 12 ) * 360;
    let minDeg = ( min / 60 ) * 360;
    let secDeg = ( sec / 60 ) * 360;
    hourEl.style.transform = `rotate(${hourDeg}deg)`;
    minEl.style.transform = `rotate(${minDeg}deg)`;
    secEl.style.transform = `rotate(${secDeg}deg)`;
};

setInterval(updateClock, 1000);