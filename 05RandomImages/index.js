const container = document.querySelector('.container');
const button = document.querySelector('button');

button.addEventListener("click", () => {
    produceMorePics();
})

function produceMorePics(){
    for(j = 0; j < 12; j++){
        const newPic = document.createElement('img');
        let index = Math.floor(Math.random() * 100);
        newPic.src = `https://picsum.photos/200/300?random=${index}`;
        const div = document.createElement('div');
        div.appendChild(newPic);
        container.appendChild(div);
    }
    
}