const minNumber = 1;
const maxNumber = 100;
const answer = Math.floor(Math.random() * (maxNumber - minNumber + 1))+ minNumber;

let attempts = 0;
let guess;
let running = true;
let history = [];

while(running) {
    guess = window.prompt(`Guess a number between ${minNumber} - ${maxNumber}`);
    
    if(guess === null) {
        running = false;
        break;
    }
    guess = Number(guess);

    if(history.includes(guess)) {
        window.alert(`You already try ${guess}`)
        continue;
    }

    if(guess < minNumber || guess > maxNumber || isNaN(guess)) {
        window.alert(`Invalid Number`)
        continue;
    }
    attempts++;
    history.push(guess);
    if(guess < answer) {
        window.alert(`Too low`)
    }
    else if(guess > answer) {
        window.alert(`Too high`)
    }
    else {
        window.alert(`Correct ! The answer was ${answer} 
            It took you ${attempts} attempts
            youre guess is :  ${history.join(`-->`)}`)
        running = false;
    }
}