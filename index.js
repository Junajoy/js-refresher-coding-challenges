
// 1. Greeting Function
function greet(name) {
    return `Hello, ${name}!`;
  }
  
  // 2. Even or Odd Check
  function isEven(number) {
    return number % 2 === 0;
  }
  
  // 3. Add
  function sumArray(numbers) {
    let sum = 0;
    for (let num of numbers) {
      sum += num;
    }
    return sum;
  }
  
  // 4. Grabbing a Property from an Object
  function getProperty(obj, key) {
    return obj[key];
  }
  
  // 5. Celsius to Fahrenheit Converter
  function celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }
  
  // 6. Finding the Bigger Number
  function findLarger(num1, num2) {
    return num1 > num2 ? num1 : num2;
  }
  
  // 7. Reversing Text
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  // 8. Counting Vowels
  function countVowels(str) {
    const vowels = 'aeiou';
    let count = 0;
    for (let char of str.toLowerCase()) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
  }
  
  // 9. Simple Calculator
  function calculator(num1, num2, operator) {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        return num2 === 0 ? "Cannot divide by zero" : num1 / num2;
      default:
        return "Invalid operator";
    }
  }
  
  // 10. First and Last Array Elements
  function getFirstAndLast(arr) {
    if (arr.length === 0) return [];
    if (arr.length === 1) return [arr[0], arr[0]];
    return [arr[0], arr[arr.length - 1]];
  }
  
  module.exports = {
    greet,
    isEven,
    sumArray,
    getProperty,
    celsiusToFahrenheit,
    findLarger,
    reverseString,
    countVowels,
    calculator,
    getFirstAndLast
  };
  