const button = document.getElementById('button');
const timerDiv = document.getElementById('timer');
const result = document.getElementById('result');
const animation = document.getElementById('animation');
let intervalId;
let m = 8;
let s =  0;
const boilEgg = () => {
    document.querySelector('#img').src = 'https://static.vecteezy.com/system/resources/previews/009/384/648/non_2x/eggs-clipart-design-illustration-free-png.png';
    clearInterval(intervalId);
    result.innerHTML = `Egg boiling`;

    animation.style.display = 'inline-block';
    if(s == 0){
        m -= 1;
        s = 59;
    }else{
        s -= 1;
    }
    timerDiv.innerHTML = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    intervalId = setInterval(boilEgg, 10);
    if(m == 0 && s == 0){
        clearInterval(intervalId);
        result.innerHTML = "Egg Boiled⏰";
        timerDiv.innerHTML = `00:00`;
        animation.style.display = 'none';
        document.querySelector('#img').src = 'https://static.vecteezy.com/system/resources/previews/009/379/808/non_2x/boiled-egg-clipart-design-illustration-free-png.png';
        m = 8;
        s = 0;
    }
    
};

button.addEventListener('click', boilEgg);

