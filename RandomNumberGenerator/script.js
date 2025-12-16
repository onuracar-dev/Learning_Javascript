const MyButton = document.getElementById(`MyButton`);
const label1 = document.getElementById(`label1`)
const label2 = document.getElementById(`label2`)
const label3 = document.getElementById(`label3`)

let min = 1;
let max = 6;

let randomNumber1;
let randomNumber2;
let randomNumber3;

MyButton.onclick = function () {
    randomNumber1 = Math.floor(Math.random() * max) + min;
    randomNumber2 = Math.floor(Math.random() * max) + min;
    randomNumber3 = Math.floor(Math.random() * max) + min;
    label1.textContent = randomNumber1;
    label2.textContent = randomNumber2;
    label3.textContent = randomNumber3;
}