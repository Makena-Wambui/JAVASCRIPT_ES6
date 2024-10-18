// operator precedence refers to the order in which operators are evaluated in an expression
// Some operators have higher precedence than others; for example, the multiplication operator has higher precedence than the addition operator

10 + 2 * 6 // 22
10 / 5 + 1 // 3

// The arrow function => has a lower precedence than many other operators 
// This means that the arrow function => will be evaluated later in an expression

// Use () when combining the arrow function => with other operators to ensure that the arrow function => is evaluated correctly

let x = 10;
console.log(x);

//x || () => {}; // SyntaxError: Unexpected token '=>'
x || (() => 1);

// No parentheses are needed when there is a ternary operator ?: because arrow functions have higher precedence than the ternary operator so 
// the arrow function will be evaluated first.

let y = true;
let result = y ? () => 1 : () => 2;
console.log(result()); // 1

// Arrow functions and logical AND operator &&
let condition = false;
// throws an error because no () are used
//let r = condition && () => 2;
//console.log(r); 

let r = condition && (() => console.log('I am an arrow function'));
console.log(r); 

// Arrow function in a return statement
// No () are needed when returning an arrow function

function func() {
    return () => 1;
}
console.log(func()());

//Arrow function with the addition operator
// let num = 5 + () => 3; // syntax error

let num = 5 + (() => 3)();
console.log(num);

function f(b) {
    const a = (...args) => args[1] + b;
    return a(1, 2, 3); 
}
console.log(f(10)); // 12

function test2() {
    return () => 1 + 3;
}
console.log(test2()()); // 4