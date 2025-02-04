let comingYear = new Date('jan 1, 2026 00:00:00').getTime();
let hoursEl = document.querySelector('#hour');
let daysEl = document.querySelector("#day");
let minEl = document.querySelector("#min");
let secEl = document.querySelector("#sec");

function updateTime(){
    let today = new Date().getTime();
    let gap = comingYear - today;

    let seconds = 1000;
    let minutes = seconds * 60;
    let hours = minutes * 60;
    let days = hours * 24;


    const d = Math.floor(gap / days);
    const h = Math.floor((gap % days) / hours);
    const m = Math.floor((gap % hours) / minutes);
    const s = Math.floor((gap % minutes) / seconds);
    console.log(m, s);

   
    hoursEl.innerHTML =  h < 10 ? '0' + h : '' + h;
    daysEl.innerHTML = d < 10 ? '0' + d : '' + d;
    minEl.innerHTML = m < 10 ? '0' + m : '' + m;
    secEl.innerHTML = s < 10 ? '0' + s : '' + s;

    setTimeout(updateTime, 1000);
};
updateTime()