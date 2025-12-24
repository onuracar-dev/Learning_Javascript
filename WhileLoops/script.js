let loggedIn = false;
let username;
let password;

while(!loggedIn) {
    username = window.prompt(`Enter your username`);
    password = window.prompt(`Enter your password`);

    if(username === `onur` && password === `acar`) {
        loggedIn = true;
        console.log(`Youre logged in`)
    }
    else {
        console.log(`Invalid credentials ! please try again`);
    }
}

// or you can do this


do { 
    username = window.prompt(`Enter your username`);
    password = window.prompt(`Enter your password`);

    if(username === `onur` && password === `acar`) {
        loggedIn = true;
        console.log(`Youre logged in`)
    }
    else {
        console.log(`Invalid credentials ! please try again`);
    }
}while(!loggedIn)