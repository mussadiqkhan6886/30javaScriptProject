let checked = document.querySelector('input');
let body = document.querySelector('body');


checked.checked = JSON.parse(localStorage.getItem('data'));;
function updataValue(){
    if(checked.checked){
        body.style.backgroundColor = 'black';
    }else{
        body.style.backgroundColor = 'white';
    }
}


updataValue()

checked.addEventListener('input', () => {
    updataValue();
    setData();
})

function setData(){
    localStorage.setItem('data', JSON.stringify(checked.checked));
}


