let celsiusEl = document.querySelector('#celsius');
let fahrenheitEl = document.querySelector('#fahrenheit');
let kelvinEl = document.querySelector('#kelvin');

function computeTemp(event){
    let currentValue = +event.target.value;

    switch(event.target.name){
        case 'celsius':
            fahrenheitEl.value = ((currentValue * 9/5) + 32).toFixed(2);
            kelvinEl.value = (currentValue + 273.15).toFixed(2);
            break;
        case 'fahrenheit':
            celsiusEl.value = ((currentValue - 32) * 5/9).toFixed(2);
            kelvinEl.value = (((currentValue - 32) * 5/9) + 273.15).toFixed(2);
            break;
        case 'kelvin':
            celsiusEl.value = (currentValue - 273.15).toFixed(2);
            fahrenheitEl.value = (((currentValue - 273.15) * 9/5) + 32).toFixed(2);
            break;
        default:

    }
}