let counter = document.querySelector('.counter');
let loader = document.querySelector(".front-loader");

let idx = 0;

updateLoader()
function updateLoader(){
    counter.innerHTML = `${idx}%`;
    loader.style.width = `${idx*2}px`;
    idx++;
    if(idx < 101){
        setTimeout(updateLoader, 30);
    }
}
