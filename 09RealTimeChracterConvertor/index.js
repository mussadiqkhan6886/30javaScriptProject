let total = document.querySelector('#total');
let remaining = document.querySelector("#remaining");
let textarea = document.querySelector('textarea');
let maxLength = 50;

textarea.addEventListener('input', () => {
    let textLength = textarea.value.length;
    let remainingChars = maxLength - textLength;

    total.innerHTML = textLength;
    remaining.innerHTML = remainingChars;
});