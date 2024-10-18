// Allow functions to receive indefinite number of arguments as an array.
// Rest parameters are indicated by three dots (...)
// Rest parameters must be the last parameter in the function definition
// Provide a way of representing variadic functions in JavaScript

function sum(...args) {
    let total = 0;

    for (const num of args) {
        total += num;
    }
    return total; 
}

console.log(sum());
console.log(sum(1, 2));
console.log(sum(1, 2, 3));

/*
fuction f(a, b, ...args) {
    // a, b are the first two arguments
    // args is an array of the rest of the arguments
}
*/

// A function definition can have only one rest parameter
// Rest parameter must be the last parameter in the function definition
// No trailing commas after the rest param.
// Rest param can not have a default value

function func(a, b, ...args) {
    console.log("Total arguments passed: " + arguments.length);
    console.log("a => " + a);``
    console.log("b => " + b);
    console.log("Type of args is: " + typeof args + ". " +  "Args => " + args);  
}
func();
func(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// rest parameter may be destructured, allowing you to ignore certain parameter positions

function f(...[a, b, c]) {
    return a + b + c;
}
console.log(f(1));
console.log(f(1, 2));
console.log(f(1, 2, 3));

function f2(...[, b, , d]) {
    return b + d;
}
console.log(f2(1)); // NaN
console.log(f2(1, 2)); // NaN
console.log(f2(1, 2, 3)); // NaN
console.log(f2(1, 2, 3, 4)); // 6

// Rest parameter is not counted towards the function's length property
// The length property returns the number of arguments expected by the function
console.log(((i, j, ...args) => i + j + args.length).length);

// rest parameters versus arguments object
// 1. The arguments object is not a real array. It is an array-like object.
// The rest param is an Array instance meaning array methods lile pop(), sort(), map(), etc can be applied on it directly.

// 2. The arguments object has the additional but deprecated callee property.
// This property contains the currently executing function.
// The rest param does not have the callee property.
function f3(a, b, c) {
    console.log(arguments.callee);
}
f3();
f3(1, 2);

// in non strict mode the arguments object is linked to the function's parameters
// If you change the value of a parameter inside inside the function, the corresponding value in arguments is also updated.

// However the rest param does not have this link to the function parameters
// Even if you reassign the rest param, or named parameters, rest param array does not update.

// Example: arguments object in non strict mode
function f4(q, r) {

    console.log(arguments[0]);
    console.log(arguments[1]);
    
    q = 10;
    r = 20;

    console.log(arguments[0]);
    console.log(arguments[1]);
}
f4(1, 2);

// Rest param does not have this link to the function parameters and is not updated when the function parameters are updated.
function f5(o, p, ...args) {
    console.log(arguments);
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(args); 

    o = 10;
    p = 20;

    console.log(arguments);
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(args);
}

f5(100, 200, 300, 400);


// In strict mode, the arguments object is not linked to the function's parameters
// Reassigning the function parameter does not change the arguments object
"use strict";
function f6(x, y) {
    console.log(arguments[0]);
    console.log(arguments[1]);

    x = 10;
    y = 20;

    console.log(arguments[0]);
    console.log(arguments[1]);
}
f6(1, 2);

//4. The rest param contains all the extra parameter in a single array.
// It does not contain any named argument before ...args
// The arguments object contains all the arguments passed to the function, including named arguments before the rest param and the rest param array itself, all bundled into a single arry like object.

// Argument Length
// Rest param is an array.
// Length property returns a count of the array's elements.
// If the function's only parameter is the rest parameter, then restparam.length = arguments.length

function f7(...args) {
    console.log(args.length);
    console.log(args.length === arguments.length);
}

f7(4, 5, 6);

// Using rest params in combination with ordinary params.
function multiply(m, ...args) {
    return args.map((arg) => arg * m);
}

console.log(multiply(2, 2, 3, 4));

// Array methods can be used on the rest parameter but not on the arguments object.
function f8(...args) {
    const sortedArgs = args.sort();
    return sortedArgs;
}

function f9(r, s, t, ...args) {
    console.log(args);
    const newArgs = args.sort();
    console.log(newArgs);

    console.log(arguments);
    //const newArguments = arguments.sort(); // Throws TypeError
    //console.log(newArguments);
}

f9(10, 2, -5, 0, -6, 90, 8);

// Before rest parameters, arguments object needed to be converted into a normal array,
// before calling normal array methods on it.
function f10 (c, v) {
    const normalArray = Array.from(arguments);
    const firstArg = normalArray.shift();
    console.log(firstArg);
    
    // Error here 
    // const badArg = arguments.shift();
}
f10(3, 4);

// Instead of this, we can simply gain access to a normal array using the rest parameter.
function f11(...args) {
    const arr = args;
    const first = arr.shift();
    console.log(first);
}

f11(2);
