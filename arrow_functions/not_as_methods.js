// Arrow function expressions should only be used for non method functions.
// This is because arrow functions do not have their own this.
// If you need to access this in an arrow function, you should use a regular function instead.
// This is what happens when you try to use an arrow function as a method:

"use strict"; // This is necessary to enable strict mode in Node.js (not required in the browser)
const obj = {
    name: 'Piper',
    age3: 5,
    // arrow function has no access to this 
    age: (age) => `Hello, my name is ${this.name} and I am ${this.age} years old.`,
    test: () => 'Testing..',
    greet() {
        return `Hello my name is ${this.name} and I am ${this.age3} years old.`;
    },
    person: this,
};

console.log(obj.name);
console.log(obj.age(5)); // Hello, my name is undefined and I am undefined years old.
console.log(obj.age3);
console.log(obj.greet()); // Hello my name is Piper and I am 5 years old.
console.log(obj.person);
console.log(obj.test();

const obj2 = {
    i: 10,
    b: () => console.log(this.i, this), // Arrow function has no access to this
    c() {
        console.log(this.i, this);
    }, 

};

console.log(obj2.i);
obj2.b();
obj2.c();