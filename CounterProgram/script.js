const decrease = document.getElementById("decreaseBtn");
const reset = document.getElementById("resetBtn");
const increase = document.getElementById("increaseBtn");
const label = document.getElementById("countLabel");

let count;

decrease.onclick = function () {
    count--;
    label.textContent = count;
}

increase.onclick = function () {
    count++;
    label.textContent = count;
}

reset.onclick = function () {
    count = 0;
    label.textContent = count;
}