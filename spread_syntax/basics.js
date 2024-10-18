// spread syntax => ...
// Allows iterables such as arrays or strings to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.
// For object literals, the spread syntax enumerates the properties of the object, then adds them(key-value pairs) to the new object.

// Looks exactly like rest parameter syntax
// But is its opposite
// Spread syntax "expands" an array into its elements, while rest parameter collects multiple elements into a single array.

function add(a, b, c) {
    return a + b + c;
}

const arr = [5, 10, 15];
console.log(add(...arr)); // 30

// myFunc(a, b, ...iterableObj);
console.log(add(2, 5, ...arr)); // 12

// [1, 2, ...iterableObj, '4', 'five'];
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9];
const arr3 = [...arr1, ...arr2];
console.log(arr3); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log([1, 9, ...arr2, 'mom']);

// { ...obj, location: 'USA' };

// Three distinct places that accept the spread syntax
//1. Function arguments list: myfunction(a, ...iterableObj, c);
//2. Array literals: [1, 2, ...iterableObj, '4', 'five'];
// 3. Object literals: { ...obj, location: 'USA' };

//Only iterbles like arrays and strings can be spread in an array literal and function arguments list.
// Most objects are not iterable, but can be spread in an object literal.

const obj1 = { foo: 'bar', x: 42 };
//const newArr = [...obj1];
//console.log(newArr); // TypeError: obj is not iterable

// All primitives can be spread in object literals
// Only strings have enumerable own properties
// Spreading anything else does not create any properties in the new object

// Spreading in object literals enumerates the properties of the value.
// Arrays have indices as enumerable own properties.
// Strings have characters as enumerable own properties.
// Therefore arrays and strings can be spread in object literals.

const m = { ...'abc' };
console.log(m); // { '0': 'a', '1': 'b', '2': 'c' }
const n = { ...[4, 5, 6] };
console.log(n); // { '0': 4, '1': 5, '2': 6 }
const ob = { key: 'value' };
const ob2 = { key1: 'value1', ...1, ...true, ...null, ...undefined, ...ob, ...'bar' };
console.log(ob2); // {}

const ob3 = { key: 'value', ...'foo'};
console.log(ob3); // { '0': 'f', '1': 'o', '2': 'o' } // Only strings have enumerable own properties

// SPREAD IN FUNCTION CALLS
// Can be used to replace apply() for function calls
// Function.prototype.apply() is often used to call a function with an array of arguments.

function myFunction(x, y, z) {
    console.log(x, y, z);
}
const args = [0, 1, 2];
myFunction.apply(null, args); // 0 1 2

// With spread syntax the above can be written as
myFunction(...args); // 0 1 2

const args1 = [3, 4, 5];
// Any argument in the argument list can use spread syntax.
// Spread syntax can be used multiple times in the argument list.

myFunction(1, ...args, 2, ...args1);
myFunction(4, ...[2], 6);

// An array can be easily used with new thanks to spread syntax.
const dateFields = [2024, 0, 11];
const newDate = new Date(...dateFields);
console.log(newDate);


// Spreading in Array Literals

// 1. A more powerful array literal
// The array literal syntax is no longer sufficient in creating a new array with an existing array as part of it
// Instaed, imperative code must be used with a combination of Array.prototype methods such as push(), splice(), concat(), etc.
// Spread syntax provides a more succinct way to create a new array

let states = ['California', 'Texas', 'New York'];
states.push('Florida');
console.log(states); // [ 'California', 'Texas', 'New York', 'Florida' ]

const states1 = ['Maine', 'Vermont', 'New Hampshire'];
states.concat(...states1);
console.log(states); 

// Creating a new array with spread syntax
// ... can be used anywhere in the array literal, and used multiple times.
const parts = ["shoulders", "knees"];
const song = ["Head", ...parts, "and", "toes"];
console.log(song); // [ 'Head', 'shoulders', 'knees', 'and', 'toes' ]

// Copying an array
// Spread syntax can be used to make a shallow copy of an array.
// Each element in the older array retains its own identity.
const arr4 = [1, 2, 3];
const arr5 = [...arr4];
console.log(arr5); // [1, 2, 3]

// This is the same as arra.slice()
const arr6 = arr4.slice();
console.log(arr6); // [1, 2, 3]

arr5.push(4);
console.log(arr5); // [1, 2, 3, 4]
console.log(arr4); // [1, 2, 3]

// While copying the array, the spread syntax only goes one level deep.
// May be unsuitable for copying multidimensional arrays.
// No native operation in JS, can make a deep clone

const mdArray = [[1, 2], [3, 4]];
const mdArray2 = [...mdArray];
console.log(mdArray2[0][0]);
console.log(mdArray2[0][1]);
console.log(mdArray2[1][1]);
console.log(mdArray2.shift().shift());
console.log(mdArray2);
console.log(mdArray);

// Better Array Concatenation
// concat() method is often used to concatenate array to the end of an existing array to create a new array.
let foo = ['a', 'b', 'c'];
const bar = ['d', 'e', 'f'];
const baz = foo.concat(bar);
console.log(baz); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]

// With spread syntax
foo = [...foo, ...bar, ...['g', 'h', 'i']];
console.log(foo); // [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i' ]


let arr7 = [3, 4, 5];
arr7 = [...arr7, ...[6, 7, 8]];
console.log(arr7); // [3, 4, 5, 6, 7, 8]

// Array.prototype.unshift() method is used to add elements to the beginning of an array.
// Spread syntax can be used to achieve the same result.

const arr8 = [1, 2, 3];
const arr9 = [4, 5, 6];
Array.prototype.unshift.apply(arr8, arr9);
console.log(arr8); // [4, 5, 6, 1, 2, 3]

// With spread syntax
let arr10 = [1, 2, 3];
arr10 = [...arr9, ...arr10];
console.log(arr10); // [4, 5, 6, 1, 2, 3]

// Conditionally adding values to an array
// Spread syntax can be used to conditionally add values to an array
const shouldAdd = false;
const arr11 = [...[1, 2, 3], ...(shouldAdd ? [4] : [])];
console.log(arr11); // [1, 2, 3]

// spreading an empty array has no effect
const arr12 = [1, ...[]];
console.log(arr12); // [1]

// You can make an element present or absent in an array literal.
// Depending on a condition, using a conditional operator.
const isSummer = false;
let fruits = [...['pineapples', 'mangoes', 'bananas'], ...(isSummer ? ["watermelon"] : [])];
console.log(fruits); // [ 'pineapples', 'mangoes', 'bananas', 'watermelon' ]

// This is different.
// An extra element, undefined, will be added to the array when isWinter is false.
// This element will be visited ny array methods like map(), filter(), etc.
const isWinter = false;
fruits = [...['pineapples', 'mangoes', 'bananas'], isWinter ? "kiwi" : undefined];
console.log(fruits); // [ 'pineapples', 'mangoes', 'bananas', 'kiwi' ]

const newA = [...['Family']];
console.log(newA); // [ 'Family' ]

// Spreading in Object Literals
// 1. Copying and merging objects
// Use spread syntax to merge multiple objects into a single object.

const obj = { name: 'Alice', age: 20 };
const obj2 = { sex: 'Female', Location: 'Texas' };
const obj3 = { ...obj, ...obj2 };
console.log(obj3); 

// A single spread can be used to copy an object.(shallow copy)
// The copy will contain enumerable properties of the original object.
// But non enumerable properties and the prototype of the original object will not be copied.

// What are enumerable properties?
// They are properties that can be iterated over in a loop like for...in loop or accessed using Object.keys() method.

// Non enumerable properties are properties that cannot be iterated over in a loop or accessed using Object.keys() method.

// Example:
const originalObject = Object.create({}, {
    enumerableProp: {
        value: 42,
        enumerable: true
    },

    nonEnumerableProp: {
        value: 89,
        enumerable: false
    }
});

const copyObj = {...originalObject };
console.log(copyObj); // { enumerableProp: 42 }
console.log(copyObj.nonEnumerableProp); // undefined

// Overriding Properties
// When one object is spread into a single object, or when multiple objects are spread into a single object,
// Properties with the same name may be encountered.
// The property takes the last value assigned to it.
// And will remain inthe position it was originally assigned.

const obj4 = { name: "Emma", Position: "Social Media Manager", ID: 1234, age: 42 };
const obj5 = { name: "Emma", Position: "Software Engineer", ID: 4567, age: 22 };
const obj6 = { ...obj4, ...obj5 };
console.log(obj6); // { name: 'Emma', Position: 'Software Engineer', ID: 4567, age: 22 }


const obj7 = { foo: 'bar', x: 42 };
const obj8 = { foo: 'baz', y: 13 };
const merged = { x: 19, ...obj7, ...obj8, y: 24 };
console.log(merged);

// Conditionally adding properties to an object
// If isSpring is true, the object will have a property called cherries.
// If isSpring is false, the object will not have the cherries property.
// This is because if isSpring is false, the spread syntax will spread an empty object.
// An empty object has no properties to add to the new object.
const isSpring = true;
const harvest = {
    peaches: 26,
    plums: 33,
    oranges: 12,
    ...(isSpring ? { cherries: 10 } : { })
};
console.log(harvest);

// This is different from:
// Here the object will always have the cherry property, and it will be accessed by methods such as Object.keys()
const isFall = true;
const harvest2 = {
    peaches: 26,
    plums: 33,
    oranges: 12,
    cherries: isFall ? 10 : undefined,
};
console.log(harvest2);

// Compare spread syntax with Object.assign()
// Object.assign() is a method that is used to copy the values of all enumerable own properties from one or more source objects to a target object.
// So it can be used to mutate an object.
// Spread syntax can not be used to mutate an object.
const obj9 = { foo: 'bar', x: 42 };
Object.assign(obj9, { x: 89, y: 13 });
console.log(obj9); // { foo: 'bar', x: 89, y: 13 }

// Object.assign() will trigger setters when copying properties into the target object.
// Spread syntax will not trigger setters.
// Getters and setters are special properties.
// Getters allow you to define logic that runs whan accessing a property.
// Setters allow you to define logic that runs when assigning a property's value.

// An object with a setter for the foo property
// The setter logs the value of the property when it is set.
// We are using Object.assign() to copy the foo property from the source object, { foo: 1 }, to the target object, obj10.
// This triggers the setter, and the value of the property is logged to the console.
const obj10 = Object.assign(
    {
        set foo(value) {
            console.log("Setter called with " + value);
        },
    },
    { foo: 1 }
);

obj10.foo;

// The same code using spread syntax
// Spread syntax will not trigger the setter.
// Here you have an object with a setter foo.
// You use spread syntax to copy properties from the source object, { foo: 1 }, to the target object
// Setter is not triggered.
// Spread directly assigns foo to 10. The setter is overwritten with a regular property.

const spreadObj = {
    set foo(val) {
        console.log(val);
    },
    ...{ foo: 10, bar: 20 } 
};

console.log(spreadObj.foo);
