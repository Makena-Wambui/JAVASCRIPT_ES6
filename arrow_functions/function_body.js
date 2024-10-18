// Arrow functions can have an expression body or a block body.
// In an expression body, only a single expression is specified.
// It becomes the implicit return value.
// In a block body, you must use an explicit return statement.

// expression body
const boo = () => 1;
console.log(boo()); // 1

const b = greeting => `${greeting}!`;
console.log(b('Hello')); // Hello!
console.log(b('Hi')); // Hi!

const square = x => x * x;
console.log(square(5)); // 25

const subtract = (a, b) => a - b;
console.log(subtract(10, 5)); // 5

// block body
const func = (j, k) => {
    const sum = j + k;
    return sum; // explicit return
};

console.log(func(50, 20)); // 70
console.log(func(10)); // NaN - k is undefined

// Returning an object literal requires parentheses around the object
const wrong1 = () => { firstName: 'Candy' };
console.log(wrong1()); // undefined

const right1 = () => ({ firstName: 'Candy' });
console.log(right1());

const wrong2 = () => { foo: 1 };
wrong2(); // undefined

const right2 = () => ({ foo: 1 });
console.log(right2()); // { foo: 1 }

//const wrong3 = () => { foo: function() {} };
//console.log(wrong3()); // function statements require a function name

const right3 = () => ({ foo: function() {} });
console.log(right3()); // { foo: [Function: foo] }

//const wrong4 = () => { foo() {} };
//console.log(wrong4()); // SyntaxError: Unexpected token '{'

const right4 = () => ({ foo() {} });
console.log(right4()); // { foo: [Function: foo] }
