// decompose a traditional anonymous function into a simple arrow function step by step.
// each step along the way is a valid arrow function.
//Traditional function expressions and arrow functions have more differences(beahvioral) than just in their syntax.

// Traditional anonymous function 
(function (a) {
      return a + 100;
});

// Remove the function keyword and place arrow between the parameter and opening body brace

(a) => {
    return a + 100;
};

// Remove the body braces and word return -- the return is implied.
(a) => a + 100;

// Remove the parentheses around the parameter -- if there's only one parameter
a => a + 100;

// In our example above, parentheses around the parameter and braces around the function body are omitted.
// However there are circumstances where these are required.
// () are only omitted if the function has a single simple parameter.
// Multiple params, no params, default, destructured or rest params require parentheses.
// {} are only omitted if the function has a single expression in its body. 
// If the function has a more complex body, the braces are required.

// Traditional anonymous function with multiple parameters
(function (a, b) {
    return a + b + 100;
});

// Arrow function with multiple parameters
(a, b) => a + b + 100;

const a = 10;
const b = 20;

// Traditional anonymous function with no parameters
(function () {
    return a + b + 100;
});

// Arrow function with no parameters
() => console.log(a + b + 100);


// Braces are omitted if the function directly returns an expression.
// If the function body has statements, the braces are required.
// Plus the return keyword is required in this case.

// Traditional anonymous function with multiple statements
(function (a, b) {
    console.log('Hello');
    return a + b + 100;
});

// Arrow function with multiple statements
(a, b) => {
    console.log('Hello');
    return a + b + 100;
};

// You can assign the arrow function to a variable
// This allows you to refer to the function by the variable name.

// Traditional named function expression
function multiply(x, y) {
    return x * y;
}

// Arrow function assigned to a variable
const m = (x, y) => x * y;
console.log(m(2, 3)); // 6

