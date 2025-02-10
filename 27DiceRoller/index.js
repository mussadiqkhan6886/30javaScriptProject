let btn = document.getElementById('btn');
let dice = document.querySelector(".dice");

let data = getData() || [];

btn.addEventListener('click', () => {
    dice.classList.add('animate-rotate');
    setTimeout(() => {
        dice.classList.remove('animate-rotate');
    }, 1000);
    let randomNum = Math.floor(Math.random() * 6) + 1;  
    const diceFace = updateDice(randomNum);
    dice.innerHTML = diceFace;
    data.push(randomNum);
    updateData();
    storeData();
});

let updateData = () => {
    const ul = document.querySelector('.list');
    ul.innerHTML = '';
    for(let i = 0; i < data.length; i++) {
        const li = document.createElement('li');
        li.innerHTML = `Roll ${i+1}: <span>${updateDice(data[i])}</span>`;
        li.addEventListener('mouseover', () => {
            li.style.background = 'red';
            li.style.cursor = 'pointer';
            li.style.color = 'white';
        });
        li.addEventListener('mouseout', () => {
            li.style.background = '';
            li.style.color = '';
        });
        li.addEventListener('click', (e) => {
            data.splice(i, 1);
            li.remove();
            storeData();
            updateData()
        })

        ul.appendChild(li);
    }
}

let updateDice = (randomNum) => {
    switch (randomNum){
        case 1:
            return `&#9856;`;
        case 2:
            return `&#9857;`;
        case 3:
            return `&#9858;`;
        case 4:
            return `&#9859;`;
        case 5:
           return `&#9860;`;
        case 6:
            return `&#9861;`;
    }
}

function storeData(){
    localStorage.setItem('data', JSON.stringify(data));
}
function getData(){
    return JSON.parse(localStorage.getItem('data')) || [];
}

document.addEventListener('DOMContentLoaded', () => {
    updateData();
})
