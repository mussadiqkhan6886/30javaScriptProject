let career = ["Student", "Web Developer", "Instructor"];
let careerIndex = 0;
let index = 0;

let line = document.querySelector('.container');

function updateChar(){
    careerIndex++;
    line.innerHTML = `I am ${career[index].slice(0, 1) == 'I' ? 'an' : 'a'} ${career[index].slice(0, careerIndex)}`;
    if(careerIndex == career[index].length){
        index++;
        careerIndex = 0;
    }
    if(index == career.length){
        index = 0;
    }
    setTimeout(updateChar, 400);
}


updateChar()
