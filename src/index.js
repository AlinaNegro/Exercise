/* приветствие */

const inputIn = document.querySelector('.welcome__input-in');
const button = document.querySelector('.welcome__button');
const welcome = document.querySelector('.text');

button.onclick = function () {
    const name = inputIn.value;
    welcome.innerHTML = (`Привет, ${name}!`);
    inputIn.value = '';
}

/* калькулятор */

const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const sum = document.getElementById('sum');
const subtract = document.getElementById('subtract');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const result = document.getElementById('result');


sum.onclick = function () {
    const x = +num1.value;
    const y = +num2.value;
    result.innerHTML = (`${x} + ${y} = ${x + y}`);
    num1.value = '';
    num2.value = '';
}

subtract.onclick = function () {
    const x = num1.value;
    const y = num2.value;
    result.innerHTML = (`${x} - ${y} = ${x - y}`);
    num1.value = '';
    num2.value = '';
}

multiply.onclick = function () {
    const x = num1.value;
    const y = num2.value;
    result.innerHTML = (`${x} × ${y} = ${x * y}`);
    num1.value = '';
    num2.value = '';
}

divide.onclick = function () {
    const x = num1.value;
    const y = num2.value;
    result.innerHTML = (`${x} ÷ ${y} = ${x / y}`);
    num1.value = '';
    num2.value = '';
}

/* изменяет фон div-ов по клику*/

function changeColorRed() {
    const div = document.getElementById('color-red');
    const text = document.getElementById('text-red');
    div.style.backgroundColor = 'orange';
    text.textContent = 'Orange';
}

function changeColorGreen() {
    const div = document.getElementById('color-green');
    const text = document.getElementById('text-green');
    div.style.backgroundColor = 'gray';
    text.textContent = 'Gray';
}

function changeColorBlue() {
    const div = document.getElementById('color-blue');
    const text = document.getElementById('text-blue');
    div.style.backgroundColor = 'purple';
    text.textContent = 'Purple';
}