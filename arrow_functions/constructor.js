// Arrow functions can not be used as constructors
// Will throw an error when called with new
// Do not have a prototype property

const foo = () => {}; // returns undefined
console.log(foo());

//const n = new foo(); // throws an error foo is not a constructor
console.log('prototype' in foo); // returns false


// yield keyword can not be used in arrow functions body
// except when used in a generator function(s) further nested in an arrow function
// hence arrow functions can not be used as generator functions
