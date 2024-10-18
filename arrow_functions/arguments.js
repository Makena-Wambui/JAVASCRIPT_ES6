// Arrow functions and arguments object
// Arrow functions do not have their own arguments object. If arguments is used in an arrow function, it will refer to the arguments of the enclosing function.
// Normally, functions in JS have their own arguments object. This object is an array like object that contains all the arguments passed to the function. However, arrow functions do not have their own arguments object. 
// They will inherit the arguments object from the function in which they are defined ie the enclosing function/scope.
//For example:

"use strict";
function foo(n) {
    const f = () => arguments[0] + n; // arguments is inherited from the enclosing function, foo
    return f();
}

console.log(foo(5)); // returns 10

// Use rest parameters instead of arguments, which are more flexible and modern.
function fee(m) {
    const n = (...r) => r[1] + m;
    return n(10, 5);
}

console.log(fee(6)); // returns 11

// If you use arguments in an arrow function, it will refer to the arguments of the enclosing function.
// In the second example, we use rest parameters instead of arguments. These directly capture the arguments passed to it.
