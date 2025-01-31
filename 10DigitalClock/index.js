let hour = document.querySelector('#hourTime');
let minutes = document.querySelector('#minTime');
let seconds = document.querySelector('#secTime');
let amPm = document.querySelector('.ampm');

function updateClock(){
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    let ampm = 'am';

    if(h >= 12){
        ampm = 'pm';
        if(h > 12) h -= 12;
    }

    if(h === 0){
        h = 12;
    }

    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    hour.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    amPm.innerHTML = ampm;

}

setInterval(updateClock, 1000);

updateClock();
