// Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.

function multiply(a, b = 2) {
    return (a * b);
}

console.log(multiply(5, 6)); // 30
console.log(multiply(5)); // 10
console.log(multiply(2, undefined));

// In JS, function parameters default to undefined.
// it is however useful to set a different default value.
// This is where default parameters can help.

// In this example,if no value is provided for b when func is called,
// b's value would be undefined.
// Hence func would return NaN because a is multiplied by undefined.

function func(a, b) {
    /*if (b === undefined) {
        b = 1;
    }*/

    // or use ternary operator
    a = typeof a === "undefined" ? 2 : a;
    b = typeof b === "undefined" ? 1 : b;
    return a * b;
}

console.log(func(2)); // 2
console.log(func()); 

// In the past, the default value of b would be set like this:
// Test parameter values in the function body, and if they are undefined, assign them a default value.
// In function func, if b is undefined, assign it a default value of 1.
// But with default values, these checks are no longer necessary.
// The default value can be assigned in the function signature itself.

// Default parameter initializers have their own scope.
// When you give a function a default value for a parameter for example a = 10,
// this default value lives in its own scope.
// This scope is outside of the main function body where the rest of the code lives.

// Earlier parameters can be used in later default values
// If a function has multiple parameters, you can use an earlier parameter when setting the default value of a later parameter.

function f(a = 2, b = a + 6) {
    console.log([a, b]);
}

f(); // [2, 8]

// Default values can not access the function body
// Default values defined earlier can not see anything in the function body
// They can only see the parameters that are defined before them.
// If you try to use a variable or a function that is defined inside the function body when setting default values, you will get a ReferenceError.

//function foo(a, b = go()) {
function foo(a) {
    function go() {
       return ("foo");
    }
    return a + go();
}

console.log(foo("I am ")); // I am foo
// console.log(foo("I am")); // ReferenceError: Cannot access 'go' before initialization
// In the above example, we get a Reference error because the default value a = go() tries to access the function go() before it is ven defined inside the function body.

// var variables can be used in default values
// If a variable is declared with var inside a function, it can be used in default values.
// This is because var variables are function-scoped.
// This means that they are available throughout the function body, including the default values.
// However, let and const variables are block-scoped and are not available in default values.
// This is because they are only available in the block where they are defined.
// If you try to use a let or const variable in a default value, you will get a ReferenceError.
// var variables are hoisted to the top of the function, so they are available in the default values. 
// However they do not have a value until they are assigned one.
// so if you try to use a var variable before it is assigned a value, you will get undefined.

function bar(a, b = () => console.log(a)) {
    var a = 3;
    b();
}

bar(); // undefined
bar(2);
// In the above example, the default value of b is a function that returns a.
// The variable a is declared with var inside the function body.
// This means that it is available in the default value of b.
// When the function bar is called without any arguments, a is not assigned a value.
// So the default value of b is undefined.
// When the function b is called, it returns undefined.
// When the function bar is called with an argument of 2, a is assigned a value of 2.
// So the default value of b is 2.
// When the function b is called, it returns 2.

function f(a, b = () => console.log(a)) {
    var a = 1;
    b();
  }
  
  f(); 
  f(5);
  

  // Default parameter allows any expression
  // But you can not use await or yield in default values.
  // As this would pause the evaluation of the default expression.
  // The parameter must be initialized synchronously.

  /*
  async function fun(a = await Promise.resolve(1)) {
    console.log(a);
  }
  */
