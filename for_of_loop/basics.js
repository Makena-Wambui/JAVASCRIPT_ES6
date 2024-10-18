// for...of statement executes a loop that operates on a sequence 
// of values sourced from an iterable object.

// They include:
// - Array
// -String
// -Map
// -Set
// -TypedArray
// - NodeList(and other DOM collections)
// - arguments object
// - generators produced by generator functions
// - user-defined iterables


// Example 1
const arr1 = [1, 2, 3, 4, 5];

for (const value of arr1) {
    console.log(value);
}

// A for...of loop operates on values sourced from an iterable one by one in sequential order
// Iteration: each operation of the loop on a value
// The loop is said to iterate over the iterable
//  in each iteration statements are executed that may refer to the current sequence value.

// When a for...of loop iterates over an iterable, it first calls the iterable's Symbol.iterator method.
// This method returns an iterator.
// The loop then repeatedly calls the resulting iterator's next()method.
// In this way, a sequence of values are produced that are assigned to "value" in each iteration.

// WHAT IS AN ITERATOR?
// An iterator is an object in JS that allows you to go through a collection of items, one at a time.
// It has a next() method
// This method returns an object with 2 properties:
// - value: the next value in the collection
// - done: a boolean that indicates whether the collection has been fully iterated through

const myArray = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

// Get the iterator
let iteratorObj = myArray[Symbol.iterator]();

// Call the iterator's next() method to iterate over the array
let result = iteratorObj.next();

// result is an object with two properties: value and done
// value is the current array element
// done is a boolean that indicates whether the array has been fully iterated through
// if done is true, the loop stops
// if done is false, the loop continues

while (result.done === false) {
    // log the current array element
    console.log(result.value);

    // Get the next array element
    result = iteratorObj.next();
}

// // The loop exits when the iterator has completed iterating over the array/collection.
// That is when next is called, it returns an object whose done property is true.
// You can use control flow statements inside the loop's body:
// - break: to exit the loop early. It stops execution and goes to the next(first) statement after the loop.
// -continue: to skip the current iteration and go to the next one. It stops execution and goes to the next iteration of the loop.

// If for...of loop exits early(break was encountered, or error was thrown)
// the iterator's return() method is called to perform clean up.

// The variable part of the for...of statement is a variable declaration.
// It accepts anything that can come before = operator.
// This includes let, const, and var.
// Use const to declare the variable if its value should not be reassigned within the loop body.
// Use let if you plan to reassign the variable's value.

// The variable part of the for...of statement can be omitted.
// This is useful when you don't need to reference the current value within the loop body.
// In this case, the loop iterates over the iterable, but the current value is not assigned to a variable.
// This is useful when you only need to execute a block of code a certain number of times.

const arr2 = [2, 4, 6, 8, 10];
for (let i of arr2) {
    i *= 2;
    console.log(i);
}

// Using destructuring in a for...of loop
// You can use destructuring in the variable part of the for...of statement.
// This allows you to extract values from the iterable and assign them to variables.
// The destructuring syntax is similar to that used in array and object literals.
// You can destructure arrays, objects, and other iterable objects.
// The destructuring syntax is enclosed in square brackets([]) or curly braces({}).
// The destructuring syntax can be used with or without the variable part of the for...of statement.
// When used with the variable part, the destructuring syntax is placed inside the parentheses.
// When used without the variable part, the destructuring syntax is placed after the of keyword.
// The destructuring syntax can be used to extract values from nested arrays and objects.
// The destructuring syntax can be used to assign default values to variables.
// The destructuring syntax can be used to ignore values.

// If iterating over an array of arrays, use destructuring to assign values to multiple local variable inside the loop.
const arrOfArrays = [
    [254, "Kenya"],
    [414, "Uganda"],
    [678, "Tanzania"]
];
for (const [code, country] of arrOfArrays) {
    console.log(`Code: ${code}, Associated country: ${country}`);
}

// Invalid syntax: async
/*
SyntaxError: The left-hand side of a for-of loop may not be 'async'.
let async;
for (async of arr1) {
    console.log(async);
}
*/

// Iterating over a string
const myStr = "Hello";
for (const char of myStr) {
    console.log(char);
}

// Iterating over a Typed Array
const typedArray = new Uint8Array([0x00, 0xff]);
for (const byte of typedArray) {
    console.log(byte);
}

/*
WHAT ARE MAPS?
It is a collection.
It holds key value pairs
It remembers the original insertion order of the keys

Key points about Map objects:
- Regular objects only allow strings or symbols as keys
- Maps allow keys of any type: objects, functions, primitives, or any other value
- Maps mantain the order of their elements based on insertion order
- When you iterate over a map, the elements are returned in the order in which they were inserted

- METHODS
- set(key, value): adds a new element to the map or updates an existing one that has this key with this value
- get(key): returns the value of the element that has the specified key
- delete(key): removes the element with the specified key
- has(key): returns a boolean indicating whether an element with the specified key exists
- clear(): removes all elements from the map
- size: returns the number of elements in the map

- ITERATING OVER MAPS
- You can iterate over a map using the for...of loop

*/

// Craete a new map
const myMap = new Map();

// Add elements to the map
myMap.set('a', 'apple');
myMap.set('b', 'banana');
myMap.set('c', 'cherry');
myMap.set('d', 'date');

// Get the value of a specific key
console.log(myMap.get('c'));

// Check if a key exists in the map
console.log(myMap.has('c'));
console.log(myMap.has('t'));

// Remove an element from the map
myMap.delete('d');
console.log(myMap);
console.log(myMap.size);

for (const [k, v] of myMap) {
    console.log(`Alphabet: ${k}, Word: ${v}`);
}

myMap.clear();
console.log(myMap);

const map = new Map([[1, 'a'], [2, 'b'], [3, 'c']]);
console.log(map);

for (const item of map) {
    console.log(item);
}

for (const [key, value] of map) {
    console.log(key, value);
}


// Iterating over a Set
const set = new Set([1, 1, 2, 3, 3, 5, 6, 6]);
console.log(set);

for (const num of set) {
    console.log(num);
}

// Iterating over the arguments object
// Do this to examine parameters passed to a function
function sum() {
    for (const arg of arguments) {
        console.log(arg);
    }
}
sum(10, 20, 30);

// Iterating over a custom iterable object(user defined iterable)
// objects are not iterable by default
// this object is an iterable because it implements the Symbol.iterator method
// The method is used by for ... of loop to iterate over iterable objects like arrays, strings, maps, sets, and user-defined iterables

const customIterable = {
    // This method returns an iterator object
    [Symbol.iterator]() {
        let a = 0;
        return {
            // This here is the iterator object returned by the Symbol.iterator method
            // This object has a next() method
            next() {
                // This method returns an object with two properties: value and done
                // value is the current value in the sequence
                // done is a boolean that indicates whether the sequence has been fully iterated through
                if (a <= 10) {
                    return { value: a++, done: false };
                }
                return { value: undefined, done: true };
            },
        };
    
    }
};

for (const value of customIterable) {
    console.log(value);
}

// Iterating over an object using Symbol.iterator geb=nerator method

const iterableObj = {
    *[Symbol.iterator]() {
        yield "a";
        yield "b";
        yield "c";
    }
};
for (const value of iterableObj) {
    console.log(value);
}
