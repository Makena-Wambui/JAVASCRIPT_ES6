// Notes on the call() method:
// The call() method calls a function with a given this value and arguments provided individually.

function product(name, price) {
    this.name = name;
    this.price = price;
}

function Food(name, price) {
    product.call(this, name, price);
    this.category = 'food';
}

console.log(new Food('cheese', 5).name);
console.log(new Food('cheese', 5).price);
console.log(new Food('cheese', 5).category);

/*
Normally, when calling a function, the value of this inside the function is the object that the function was accessed on.
With call(), you can assign an arbitrary value as this when calling an existing function, without first attaching the function to the object as a property.
This allows you to use methods of one object as generic utility functions.
*/

// When you call a method on an object, this refers to the object that the method was called on.

const person = {
    name : 'John',
    greet : function() {
        console.log(`Hello, I am ${this.name}`);
    }
}
person.greet();

// this inside the greet() method refers to the person object, because the greet() method was called on the person object.

// We can change this using call() method.
// call() method allows you to manually specify what this should be when calling a function.
// This is useful when calling a function from one object, but you want this to refer to another object.

const person1 = {
    name: 'Peter'
}

// Call person's greet method but with person1 as this
person.greet.call(person1);

// Using a function as a generic utility.
// You can use call() to make a function that normally works with one object more flexible, allowing it to work with any object.

function intro() {
    console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
}

const lady = {
    name: 'Lucy',
    age: 30
};

const dog = {
    name: 'Spot',
    age: 5  
};

// use intro as a generic function for any object
// intro works with any object as long as the object has name and age properties.
// by using call(), we can use the same function with different objects, with this set to whatever object we pass to call().
intro.call(lady);
intro.call(dog);



// default paramaters vs switch,case statements
// These functions behave similarly but are written differently.
// Both functions take several parameters.
// Many of the parameters have default values.

function go() {
    return 0;
}

function withDefaults(
    a,
    b = 5,
    c = b,
    d = go(), // default value is the return value of a function go()
    e = this, //the current this value
    f = arguments[0], // set to the arguments object that is all the arguments passed to the function
    g = this.value // set to the value property of the this object
    ) {
    return [a, b, c, d, e, f, g];
}
// This function mimics the behavior of the withDefaults() function.
// But does not use default parameters.
// Instead, it uses a switch statement to set the parameters to default values based on how many arguments are passed to the function.
// Both functions return an array of the parameters passed to the function, with default values being appliied where necessary.

function withoutDefaults(a, b, c, d, e, f, g) {
    switch (arguments.length) {
        case 0:
        case 1:
            b = 5;
        case 2:
            c = b;
        case 3:
            d = go();
        case 4:
            e = this;
        case 5:
            f = arguments;
        case 6:
            g = this.value;           
    }
    return [a, b, c, d, e, f, g];
}

console.log(withDefaults.call({ value: 'value' }));
console.log(withDefaults.call({ value: 'value' }, 10));
console.log(withoutDefaults.call({ value: 'value' }, 10));

// same result is produced by both functions.