function updateAmount(){
    let amount = document.getElementById("amount").value;
    let interest = document.getElementById('rate').value;
    let months = document.getElementById("months").value;
    let output = document.getElementById('total');

    
    let interestAmount = (amount * (interest* 0.01 )) / months;
    let amountToPay = (amount / months + interestAmount).toFixed(2);
    output.innerHTML = `${amountToPay}$`
}
document.getElementById("cal").addEventListener('click', () => {
    updateAmount();
})
