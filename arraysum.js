const prompt = require('prompt-sync')();
function arraySum(arr) {
    if (!Array.isArray(arr)) {
        return "Input is not an array.";
    }
    
    let sum = 0;
    if (arr.length === 0) {
        return 0;
    }
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            return "Array contains non-numeric values.";
        }
        sum += arr[i];
    }
    
    return sum;
}
let input = prompt("Enter array elements separated by commas: ");
let arr = input.split(',').map(item => parseFloat(item.trim()));

console.log("Sum of array elements:", arraySum(arr));
