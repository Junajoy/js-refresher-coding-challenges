
const prompt = require('prompt-sync')();
function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let input = prompt("Enter a number to check if it's even:");

let num = parseInt(input);


if (isNaN(num)) {
    console.log("That's not a valid number!");
} else {
   
    if (isEven(num)) {
        console.log(num + " is even.");
    } else {
        console.log(num + " is odd.");
    }
}
// const readline = require('readline');

// function isEven(number) {
//     return number % 2 === 0;
// }

// const rl = readline.createInterface({
//     input: process.stdin,node index.js

//     output: process.stdout
// });

// rl.question("Enter a number to check if it's even: ", function(input) {
//     const num = parseInt(input);

//     if (isNaN(num)) {
//         console.log("That's not a valid number!");
//     } else {
//         if (isEven(num)) {
//             console.log(num + " is even.");
//         } else {
//             console.log(num + " is odd.");
//         }
//     }

//     rl.close();
// });
