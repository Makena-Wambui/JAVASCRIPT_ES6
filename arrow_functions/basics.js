const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];

console.log(materials.map((material) => material.length));

/* SYNTAX
 () => expression
 param => expression
 (param) => expression
 (param1, paramN) => expression
 () => {
    statements
 }
 param => {
    statements
 }
 (param1, paramN) => {
    statements
}
*/

// Rest parameters, default parameters, and destructuring within parameters supported in arrow functions and always require parentheses
// Arrow functions do not have their own this, arguments, super, or new.target
// Arrow functions cannot be used as constructors and will throw an error when used with new
// Arrow functions do not have a prototype property
// They can not be used as methods
// They can not use yield within their body
// They can not be created as generator functions

/*
(a, b, ...r) => expression
(a = 400, b = 20, c) => expression
([a, b] = [10, 20]) => expression
({ a, b } = { a: 10, b: 20 }) => expression
*/

// Arrow functions can be async
// Prefix the expression with async keyword

/*
async param => expression
async (param1, param2, ...paramN) => {
    statements
}
*/
