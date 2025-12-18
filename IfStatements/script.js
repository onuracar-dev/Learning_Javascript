const MyText = document.getElementById(`MyText`);
const MyButton = document.getElementById(`MyButton`);
const MyResult = document.getElementById(`MyResult`);
let age;
MyButton.onclick = function(){
    age = MyText.value;
    age = Number(age);
    if(age >= 100) {
        MyResult.textContent = `Youre too old to enter this site`;
    }
    else if(age == 0) {
        MyResult.textContent = `You were just born you can't enter this site`;
    }
    else if(age >=18) {
        MyResult.textContent = `Youre old enough to enter this site`;
    }
    else {
        MyResult.textContent = `Youre not old enough to enter this site`;
    }
}