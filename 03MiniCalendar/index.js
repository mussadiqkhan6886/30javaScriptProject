let date = document.getElementById('date');
let day = document.getElementById("day");
let year = document.getElementById('year');

let month = document.getElementById('month');

let today = new Date();

let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

let months= ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];

date.innerHTML = today.getDate();
day.innerHTML = days[today.getDay()];
year.innerHTML = today.getFullYear();
month.innerHTML = months[today.getMonth()]