let main = document.querySelector('#main');
let btn = document.querySelector('#btn');
let questions = [
    {
        question: "What is the output of `console.log(typeof null);`?",
        answers: ["a) object", "b) null", "c) undefined", "d) number"],
        correctAnswer: "a",
    },
    {
        question: "Which keyword is used to declare a constant variable in JavaScript?",
        answers: ["a) var", "b) let", "c) const", "d) static"],
        correctAnswer: "c",
    },
    {
        question: "Which of the following is NOT a primitive data type in JavaScript?",
        answers: ["a) String", "b) Number", "c) Boolean", "d) Object"],
        correctAnswer: "d",
    },
    {
        question: "What will `console.log(2 + '2');` output?",
        answers: ["a) 4", "b) 22", "c) NaN", "d) Error"],
        correctAnswer: "b",
    },
    {
        question: "Which method is used to convert a JSON string into a JavaScript object?",
        answers: ["a) JSON.parse()", "b) JSON.stringify()", "c) JSON.toObject()", "d) JSON.objectify()"],
        correctAnswer: "a",
    },
    {
        question: "How do you create an arrow function in JavaScript?",
        answers: [
            "a) function() => {}",
            "b) () => {}",
            "c) function => {}",
            "d) () -> {}"
        ],
        correctAnswer: "b",
    },
    {
        question: "What is the purpose of the `map()` function in JavaScript?",
        answers: [
            "a) To iterate over an array and return a new array",
            "b) To filter elements from an array",
            "c) To modify an array in place",
            "d) To find the first matching element"
        ],
        correctAnswer: "a",
    },
    {
        question: "Which built-in method removes the last element from an array?",
        answers: ["a) pop()", "b) shift()", "c) splice()", "d) remove()"],
        correctAnswer: "a",
    },
    {
        question: "What does the `===` operator do in JavaScript?",
        answers: [
            "a) Compares values only",
            "b) Compares values and types",
            "c) Assigns a value",
            "d) Checks if a variable is defined"
        ],
        correctAnswer: "b",
    },
    {
        question: "What is the purpose of `event.preventDefault()` in JavaScript?",
        answers: [
            "a) Stops the event from being captured",
            "b) Prevents the default browser behavior",
            "c) Stops the script execution",
            "d) Prevents JavaScript errors"
        ],
        correctAnswer: "b",
    }
];

let questionDiv = [];
for(let i = 0; i < questions.length; i++) {
    let divQuestion = document.createElement('div');
    divQuestion.className = 'question-div';
    let question = document.createElement('div');
    question.setAttribute('id', "question");
    let choiceDiv = document.createElement('div');
    choiceDiv.className = 'choice-div';

    main.appendChild(divQuestion);
    question.innerHTML = `${i+1}. ${questions[i].question}`;
    divQuestion.appendChild(question);
    divQuestion.appendChild(choiceDiv);

    questionDiv.push(divQuestion);

    for(let j = 0; j < 4; j++){
        let label = document.createElement('label');
        choiceDiv.appendChild(label);
        label.innerHTML = `<input type='radio' name= option${i+1} value= ${questions[i].answers[j].charAt(0)} id= option${i+1}></input>${questions[i].answers[j]} `
    }
}

btn.addEventListener('click', () => {
    for(let i=0; i <questions.length; i++){
        let selectedOption = document.querySelector(`input[name=option${i+1}]:checked`);
        if(selectedOption){
            if(selectedOption.value === questions[i].correctAnswer){
                questionDiv[i].style.border ='1px solid green';
                questionDiv[i].style.backgroundColor = 'rgba(144, 238, 144, 0.551)';
            }else{
                questionDiv[i].style.border ='1px solid red';
                questionDiv[i].style.backgroundColor = 'rgba(255, 74, 74, 0.295)';
            }
        }else{
            questionDiv[i].style.border ='1px solid red';
            questionDiv[i].style.backgroundColor = 'rgba(255, 74, 74, 0.295)'
        }
    }
})
