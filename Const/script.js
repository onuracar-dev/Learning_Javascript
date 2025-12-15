const PI = 3.14159;
let radius;
let circumference;

document.getElementById("MySubmit").onclick = function(){
    radius = document.getElementById("MyText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("MyH3").textContent = circumference + "cm";
}