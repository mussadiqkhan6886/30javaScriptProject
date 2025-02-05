let button = document.querySelector('#button');
let date = document.querySelector('#date');
let result = document.querySelector('#result');
let todayDate = new Date();


document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
});

document.addEventListener('DOMContentLoaded', () => {
    let todayFormatted= todayDate.toISOString().split('T')[0];
    date.setAttribute('max', todayFormatted);
})
function calculateAge(){
    let userDate = date.value;
    let birthdayDate = new Date(userDate);
    if(!userDate){
        alert("Enter Age");
        return;
    }
    let year = todayDate.getFullYear() - birthdayDate.getFullYear();
    let month = todayDate.getMonth() - birthdayDate.getMonth();
    let day = todayDate.getDate() - birthdayDate.getDate();

    if(day < 0){
        month--;
        day += new Date(todayDate.getFullYear(), todayDate.getMonth(), 0).getDate();
    }
    if(month < 0){
        year--;
        month += 12;
    }
    
    result.innerHTML = `You have lived ${year} Years, ${month} Months, and ${day} Days.`;
}

button.addEventListener('click', calculateAge)
