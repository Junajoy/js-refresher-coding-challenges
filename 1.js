// function greet(name) {
//     console.log( `Hello, ${name}!`);
// }
const greet=(name)=>`Hello, ${name}!`;

// const greet = (name) => {
//     return `Hello, ${name}!`;
// };
const a=2
const b=3
console.log(`The sum of ${a} + ${b} is ${a+b}`);
console.log(greet("World"));

// Problem Statement: Given an array of numbers [1, 2, 3, 4, 5, 6], use the filter() method to return a new array containing only the even numbers.
// Concepts Quizzed: Array.prototype.filter(), arrow functions for callbacks.
// Hints: The callback function for filter() should return true for elements to be included.
// Difficulty: Easy
const arr=[1,2,3,4,5,6];
const evenNumbers = arr.filter(num => num % 2 === 0);
console.log(evenNumbers); 

// . Classes - Basic Dog Class
// Problem Statement: Define a simple Dog class with a constructor that takes name and breed as arguments and sets them as properties. Add a method bark() that returns ${this.name} says Woof!.
// Concepts Quizzed: class keyword, constructor, this keyword, method definition.
// Hints: Use constructor(name, breed) and this.name = name;.
// Difficulty: Easy

class Dog {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }

    bark() {
        return `${this.name} says Woof!`;
    }
}
const myDog = new Dog("Tipu", "naadan patti"); 
console.log(myDog.bark()); // "Buddy says Woof!"    

// 10. Modules - Simple Export/Import
// Problem Statement: Create two files: math.js which exports a function add(a, b), and app.js which imports add and uses it to calculate add(5, 3). (Assume a Node.js or browser environment with module support).
// Concepts Quizzed: export (named export), import (named import).
// Hints: In math.js: export function add(a, b) { ... }. In app.js: import { add } from './math.js';.
// Difficulty: Easy


