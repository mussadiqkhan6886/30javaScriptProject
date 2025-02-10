let btn = document.getElementById('btn');
let result = document.getElementById('result');


document.querySelector('form').addEventListener('submit', (e) => e.preventDefault())
btn.addEventListener('click', () => {
    let bill = document.getElementById('bill').value;
    let tip = document.getElementById('tip').value;
    
    let total = +bill * (1 + +tip / 100);
    result.innerHTML = `${total.toFixed(2)} $`;
})