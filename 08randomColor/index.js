let containerDiv = document.querySelector(".section");


for(let i = 0; i < 30; i++){
    let container = document.createElement('div');
    container.className = 'container';
    containerDiv.appendChild(container);
}

function color(){
    document.querySelectorAll('.container').forEach((element) => {
        const newColorCode = randomNumberGen();
        element.style.backgroundColor = '#' + newColorCode;
        element.innerHTML = '#' + newColorCode;
    })
}
color()
function randomNumberGen(){
    let color = '0123456789abcdef';
    let length = 6;
    let colorCode = '';
    for(let i = 0; i < length; i++){
        let randomNumber = Math.floor(Math.random() * color.length);
        colorCode += color.substring(randomNumber, randomNumber + 1);
    }
    return colorCode;
}