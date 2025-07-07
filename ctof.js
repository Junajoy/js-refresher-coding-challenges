const prompt = require('prompt-sync')();
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

let c=prompt("Enter temperature in Celsius: ");
let celsius = parseFloat(c);

console.log("After converting:"+celsiusToFahrenheit(celsius)+ " Fahrenheit"); 
let f=prompt("enter temperature in Fahrenheit: ");
let fahrenheit=parseFloat(f);
console.log("After converting:"+fahrenheitToCelsius(fahrenheit)+" Celsius");