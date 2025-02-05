let counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
    counter.innerHTML = '0';
    function increment(){
        let currentNumber = +counter.innerHTML;
        let dataCeil = counter.getAttribute('data-ceil');
        let number = dataCeil / 15;
        currentNumber = Math.ceil(currentNumber + number);

        if(currentNumber < dataCeil){
            counter.innerHTML = currentNumber;
            setTimeout(increment, 50);
        }else{
            counter.innerHTML = dataCeil;
        }
    }
    increment();
})