import { database } from "./data.js";

// Function to select DOM elements
function selectItem(selector) {
    return document.querySelector(selector);
}

// Select DOM elements using the selectItem function
const buttonLogIn = selectItem('#buttonLogin');
const buttonSignIn = selectItem('#buttonCreate');
const inputName = selectItem('#inputName');
const accountNumber = selectItem('#inputAccNumber'); // Corrected selector
const code = selectItem('#code');
const signUp = selectItem('#clickSignUp');
const signUpContainer = selectItem('.signup');
const logInContainer = selectItem('.login');
const clickLogIn = selectItem('#clickLogIn'); // Use selectItem for consistency

// Prevent form submission
document.querySelector('#formLogIn').onsubmit = (e) => {
    e.preventDefault();
};

// Login function
const login = () => {
    const isValidUser = database.some((data) =>
        inputName.value.trim().toLowerCase() === data.name.toLowerCase() &&
        Number(accountNumber.value) === data.accNumber &&
        Number(code.value) === data.code
    );
    if (isValidUser) {
        selectItem('#error').style.display = 'none';
        document.querySelectorAll('.input').forEach((e) => {
            e.style.border = '1px solid rgba(128, 128, 128, 0.562)';
        });
        newPage();
    } else {
        selectItem('#error').style.display = 'block';
        document.querySelectorAll('.input').forEach((e) => {
            e.style.border = '2px solid red';
        });
    }
};

// Add event listener for login button
buttonLogIn.addEventListener('click', login);

// Next Page
const newPage = () => {
    selectItem('body').style.display = 'block';
    selectItem('body').innerHTML = `
        <div class="new-page">
            <h1 id='newPageHeading'>Hello, ${inputName.value}!</h1>
            <button id="logout">Log Out</button>
        </div>
    `;
    
}

signUp.addEventListener('click', () => {
    logInContainer.classList.add("hidden");
    setTimeout(() => {
        logInContainer.style.display = 'none';
        signUpContainer.style.display = 'flex';
        signUpContainer.classList.remove("hidden");
    }, 300);
});

clickLogIn.addEventListener('click', () => {
    signUpContainer.classList.add("hidden");
    setTimeout(() => {
        signUpContainer.style.display = 'none';
        logInContainer.style.display = 'flex';
        logInContainer.classList.remove("hidden");
    }, 300);
});


// signin
selectItem('#formSignIn').addEventListener('submit', (e) => {
    e.preventDefault();
})

function displayInvalid(message, element, messageElement){
    messageElement.innerHTML = message;
    element.style.border = `2px solid red`;
}
function showCorrectMessage(message, element, messageElement){
    messageElement.innerHTML = message;
    element.style.border = `2px solid green`;
    messageElement.style.color = 'green';
}
function validateFullName(){
    const fullNameMessage = selectItem('.fullNameMessage');
    const fullName = selectItem("#fullName");
    if(fullName.value.length < 3){
        displayInvalid('Please enter a valid full name', fullName, fullNameMessage);
    }else{
        showCorrectMessage('Correct', fullName, fullNameMessage);
    }
}
function validateEmail() {
    const emailMessage = selectItem('.emailMessage');
    const email = selectItem('#email');
    let emailRegex = /^[A-Za-z0-9._-]+@[A-Za-z]+\.[a-z]{2,4}$/;
    if (!email.value.match(emailRegex)) {
        displayInvalid('Please enter a valid Email', email, emailMessage);
    } else {
        showCorrectMessage('Correct', email, emailMessage);
    }
}


function validatePassword() {
    const passwordMessage = selectItem('.passwordMessage');
    const password = selectItem('#password');
    if (password.value.length < 4) {
        displayInvalid('Please enter a valid Password of 4 digits', password, passwordMessage);
    } else {
        showCorrectMessage('Correct', password, passwordMessage);
    }
}

function validateAddress() {
    const addressMessage = selectItem('.addressMessage');
    const address = selectItem('#address');
    if (address.value.length < 4) {
        displayInvalid('Please enter a valid Address', address,addressMessage);
    } else {
        showCorrectMessage('Correct', address, addressMessage);
    }
}

function validateAccountNumber() {
    const accountNumberMessage = selectItem('.accountNumberMessage');
    const accountNumberSignIn = selectItem('#accountNumber');
    if (accountNumberSignIn.value.length < 6) {
        displayInvalid('Please enter a valid Account Number', accountNumberSignIn, accountNumberMessage);
    } else {
        showCorrectMessage('Correct', accountNumberSignIn, accountNumberMessage);
    }
}

buttonSignIn.addEventListener('click', () => {   
    
    validateFullName();
    validateEmail();
    validatePassword();
    validateAddress();
    validateAccountNumber();
})

