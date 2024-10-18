// an empty arrow function returns undefined
const empty = () => {};
console.log(empty()); // undefined

// An IIFE
console.log((() => "I am an IIFE")());

const s = (a) => a > 15 ? 15 : a;
console.log(s(16)); // 15
console.log(s(10)); // 10

const max = (
    a,
    b
) => (
    a > b ? a : b);
console.log(max(5, 10)); // 10
console.log(max(3, 2)); // 3

// easy array filtering, mapping, etc.
const myArr = [5, 6, 13, 0, 1, 18, 23];
// reduce method
// Takes two arguments, a callback function and an initial value(optional)
// This is the callback function: (i, j) => i + j
// The initial value is 0
// The callback function takes two arguments, i and j
// i is the accumulator(starts with the initial value or the first element of the array if an initial value is not provided) 
// j is the current element bieng processed
// The callback func runs for each element in the array.
// It takes current accumulator(i) and adds the current element(j) to it
// The result of the callback function is the new accumulator for the next iteration
// Repeat until all elements have been processed
console.log(myArr.reduce((i, j) => i + j, 0)); // 66

const a = [10, 20, 30, 40, 50];
console.log(a.reduce((d, e) => d + e, 100));


// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// The callback function takes one argument, the current element being processed
// It returns true if the element passes the test, false otherwise
// The filter() method does not change the original array
const a2 = [8, 9, 11, 40, 25, 30];
// v is the current element being processed
// the callback function returns true if v is even
// if it returns true, then the current element, v, is added to the new array

const even = a2.filter((v) => v % 2 === 0);
console.log(even); // [8, 40, 30]

// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// The callback function takes one argument, the current element being processed
// It returns the new value for the current element
// The map() method does not change the original array
// For each element in the array, the callback function is called with the current element as an argument
// The result of the callback function is added to the new array
// Repeat until all elements have been processed
// Example:
const a3 = [1, 2, 3, 4, 5];
const triple = a3.map((v) => v * 3); // [3, 6, 9, 12, 15]
console.log(triple);

// parameterless arrow function are visually easier to parse
setTimeout(() => {
    console.log("I happen sooner.");
    setTimeout(() => {
        // deeper code
        console.log("I happen later.");
    }, 1);
}, 1);