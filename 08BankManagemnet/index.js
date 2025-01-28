import { database } from "./data.js";
console.log(database);

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
document.querySelector('form').onsubmit = (e) => {
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
        // let link = document.createElement('a');
        // link.href = 'main.html';
        // link.style.textDecoration = 'none';
        // buttonLogIn.innerHTML = '';
        // buttonLogIn.appendChild(link);
        // link.innerHTML = "Log In";
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
    selectItem('body').innerHTML = `<h1 id='newPageHeading' >Hello ${inputName.value}</h1>`;
    
}


// Toggle sign-up form
signUp.addEventListener('click', () => {
    signUpContainer.style.display = 'flex'; // Set to flex once
    logInContainer.style.display = 'none';
});

// Toggle login form
clickLogIn.addEventListener('click', () => {
    signUpContainer.style.display = 'none';
    logInContainer.style.display = 'flex'; // Set to flex once
});

