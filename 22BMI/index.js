const weight = document.querySelector('#weight');
const height = document.querySelector('#height');
let result = document.querySelector('#result');
let condition = document.querySelector("#condition");

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    submit();
})

function submit(){
    let weightVal = parseFloat(weight.value);
    let heightVal = parseFloat(height.value) / 100;
    let resultVal = weightVal / (heightVal * heightVal);
    result.innerHTML = `BMI: ${resultVal.toFixed(2)}`;

    if(resultVal < 18.5) {
        condition.innerHTML = "Underweight 😟";
    } else if (resultVal >= 18.5 && resultVal < 24.9) {
        condition.innerHTML = "Normal weight 😊";
    } else if (resultVal >= 25 && resultVal < 29.9) {
        condition.innerHTML = "Overweight 😕";
    } else {
        condition.innerHTML = "Obese 😟";
    }

}
