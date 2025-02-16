let breakfast = document.querySelector("#breakfast");
let lunch = document.querySelector("#lunch");
let dinner = document.querySelector("#dinner");

let foods = ['apple', 'mango', 'strawberry', 'banana']
let selectBreakfast = document.createElement('select');
let selectLunch = document.createElement('select');
let selectDinner = document.createElement('select'); 

foods.forEach((food) => {
    let option = document.createElement('option');
    option.value = food;
    option.innerHTML = food;
    selectBreakfast.appendChild(option);
    // selectLunch.appendChild(option);
    // selectDinner.appendChild(option);
});
foods.forEach((food) => {
    let option = document.createElement('option');
    option.value = food;
    option.innerHTML = food;
    // selectBreakfast.appendChild(option);
    selectLunch.appendChild(option);
    // selectDinner.appendChild(option);
});
foods.forEach((food) => {
    let option = document.createElement('option');
    option.value = food;
    option.innerHTML = food;
    // selectBreakfast.appendChild(option);
    // selectLunch.appendChild(option);
    selectDinner.appendChild(option);
});

breakfast.appendChild(selectBreakfast);
lunch.appendChild(selectLunch);
dinner.appendChild(selectDinner);



