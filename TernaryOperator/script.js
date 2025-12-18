let age = 12;
let message = age >=18 ? `youre an adult` : `youre a minor`;
console.log(message);


let time = 9;
let greeting = time >=12 ? `Good afternoon` : `Good Morning`;
console.log(greeting);


let purchaseAmount = 850;
let discount = purchaseAmount >=100 ? 10 : 0;
console.log(`your total is $${purchaseAmount - purchaseAmount * (discount/100)}`)