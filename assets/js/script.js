let addBtn = document.querySelector('#addBtn');
let subBtn = document.querySelector('#subBtn');
let multBtn = document.querySelector('#multBtn');
let divBtn = document.querySelector('#divBtn');

let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');

let result = document.querySelector('#result');

function add() {
    if (num1.value === "" || num2.value === "") {
        alert("Please enter number!");
        return;
    } else {
       result.textContent = Number(num1.value) + Number(num2.value);
       num1.value = "";
       num2.value = "";
    }   
}
addBtn.addEventListener('click', add);


function sub() {
    if (num1.value === "" || num2.value === "") {
        alert("Please enter number!");
        return;
    } else {
       result.textContent = Number(num1.value) - Number(num2.value);
       num1.value = "";
       num2.value = "";
    }   
}
subBtn.addEventListener('click', sub);


function mult() {
    if (num1.value === "" || num2.value === "") {
        alert("Please enter number!");
        return;
    } else {
       result.textContent = Number(num1.value) * Number(num2.value);
       num1.value = "";
       num2.value = "";
    }   
}
multBtn.addEventListener('click', mult);


function div() {
    if (num1.value === "" || num2.value === "") {
        alert("Please enter number!");
        return;
    }
    else if (num2.value == 0) {
        alert("Cannot divide by zero!");
        return;
    }
    else {
       result.textContent = Number(num1.value) / Number(num2.value);
       num1.value = "";
       num2.value = "";
    }   
}
divBtn.addEventListener('click', div);