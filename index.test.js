// index.test.js with assertions and edge cases
const assert = require('assert');
const {
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
} = require('./index');

function runTest(description, fn) {
  try {
    fn();
    console.log(`✅ ${description}`);
  } catch (error) {
    console.error(`❌ ${description}`);
   console.error(`   ${error.message}`);
  }
}

// 1. greet
runTest("question 1", () => {
  assert.strictEqual(greet("world"), "Hello, world!");
});

// 2. isEven
runTest("isEven(4) => true", () => {
  assert.strictEqual(isEven(4), true);
});
runTest("isEven(7) => false", () => {
  assert.strictEqual(isEven(7), false);
});
runTest("isEven(0) => true", () => {
  assert.strictEqual(isEven(0), true);
});
runTest("isEven(-2) => true", () => {
  assert.strictEqual(isEven(-2), true);
});

// 3. sumArray
runTest("sumArray([1,2,3,4,5]) => 15", () => {
  assert.strictEqual(sumArray([1,2,3,4,5]), 15);
});
runTest("sumArray([]) => 0", () => {
  assert.strictEqual(sumArray([]), 0);
});
runTest("sumArray([-1,-2,-3]) => -6", () => {
  assert.strictEqual(sumArray([-1,-2,-3]), -6);
});

// 4. getProperty
runTest("getProperty({name: 'Bob'}, 'name') => 'Bob'", () => {
  assert.strictEqual(getProperty({ name: 'Bob' }, 'name'), 'Bob');
});
runTest("getProperty({name: 'Bob'}, 'age') => undefined", () => {
  assert.strictEqual(getProperty({ name: 'Bob' }, 'age'), undefined);
});

// 5. celsiusToFahrenheit
runTest("celsiusToFahrenheit(0) => 32", () => {
  assert.strictEqual(celsiusToFahrenheit(0), 32);
});
runTest("celsiusToFahrenheit(-40) => -40", () => {
  assert.strictEqual(celsiusToFahrenheit(-40), -40);
});

// 6. findLarger
runTest("findLarger(10, 5) => 10", () => {
  assert.strictEqual(findLarger(10, 5), 10);
});
runTest("findLarger(7, 7) => 7", () => {
  assert.strictEqual(findLarger(7, 7), 7);
});

// 7. reverseString
runTest("reverseString('hello') => 'olleh'", () => {
  assert.strictEqual(reverseString('hello'), 'olleh');
});
runTest("reverseString('') => ''", () => {
  assert.strictEqual(reverseString(''), '');
});
runTest("reverseString('a') => 'a'", () => {
  assert.strictEqual(reverseString('a'), 'a');
});

// 8. countVowels
runTest("countVowels('Programming') => 3", () => {
  assert.strictEqual(countVowels('Programming'), 3);
});
runTest("countVowels('AEIOU') => 5", () => {
  assert.strictEqual(countVowels('AEIOU'), 5);
});
runTest("countVowels('xyz') => 0", () => {
  assert.strictEqual(countVowels('xyz'), 0);
});
runTest("countVowels('') => 0", () => {
  assert.strictEqual(countVowels(''), 0);
});

// 9. calculator
runTest("calculator(10, 5, '+') => 15", () => {
  assert.strictEqual(calculator(10, 5, '+'), 15);
});
runTest("calculator(8, 2, '/') => 4", () => {
  assert.strictEqual(calculator(8, 2, '/'), 4);
});
runTest("calculator(5, 0, '/') => 'Cannot divide by zero'", () => {
  assert.strictEqual(calculator(5, 0, '/'), 'Cannot divide by zero');
});
runTest("calculator(5, 5, '%') => 'Invalid operator'", () => {
  assert.strictEqual(calculator(5, 5, '%'), 'Invalid operator');
});

// 10. getFirstAndLast
runTest("getFirstAndLast([10, 20, 30, 40]) => [10, 40]", () => {
  assert.deepStrictEqual(getFirstAndLast([10, 20, 30, 40]), [10, 40]);
});
runTest("getFirstAndLast([42]) => [42, 42]", () => {
  assert.deepStrictEqual(getFirstAndLast([42]), [42, 42]);
});
runTest("getFirstAndLast([]) => []", () => {
  assert.deepStrictEqual(getFirstAndLast([]), []);
});
