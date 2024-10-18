// Destructuring is a JS feature
// allows you to unpack values from arrays or objects into distinct variables
// MAakes it easier to work with DS as it simplifies the process of extracting specific values.

// Destructuring arrays
const arr = [10, 25, 30, 4, 50];
const [a, b, c, d, e] = arr;

console.log(a); // 10
console.log(b); // 25
console.log(c); // 30
console.log(d); // 4
console.log(e); // 50

// Destructuring objects
// You can also destructure objects. extracting specific properties from an object, by name.

const obj = { myName: 'Alice', age: 25, city: 'New York' };
const { myName, age, city } = obj;
console.log(myName); // Alice
console.log(age); // 25
console.log(city); // New York

// Destructuring with defaults
// You can also provide default values for variables that are not found in the array or object.
// Destructuring allows you to assign default values in case the values you are trying to unpack are undefined or missing.

// this array is empty.
// so x and y will be assigned the default values 10 and 20 respectively.
const a1 = [];
const [x = 10, y = 20] = a1;
console.log(x); // 10
console.log(y); // 20

const a2 = [3];
const [i = 10, j = 20] = a2;
console.log(i); // 3
console.log(j); // 20

// destructuring objects with defaults
const obj2 = {};
const { w = 0, z = 2 } = obj2;
console.log(w); // 0
console.log(z); // 2


const { height = 1.89, weight = 60 } = { height: 1.75 };
console.log(height); // 1.75
console.log(weight); // 60

// Destructuring arrays with defaults in function parameters

function preFilled([p = 1, q = 2] = []) {
    return p + q;
}

// No argument passed
// So the default empty array is used
// Since the array is empty, p and q will be assigned the default values 1 and 2 respectively.
// So the function will return 3
console.log(preFilled()); 

// Argument passed is an empty array
// so p and q take the default values 1 and 2 respectively
// So the function will return 3
console.log(preFilled([])); 
console.log(preFilled([2])); 
console.log(preFilled([2, 4])); 

// Destructuring objects with defaults in function parameters
function preFilledObj({ value = 80 } = {}) {
    return value;
}

// No argument passed
// So the default empty object is used
// Since the object is empty, value will be assigned the default value 80
// So the function will return 80
console.log(preFilledObj());

// Argument passed is an empty object
// So value will be assigned the default value 80
// So the function will return 80
console.log(preFilledObj({}));

// Argument passed is an object with a value property
// So value will take the value of the value property
// So the function will return 100
console.log(preFilledObj({ value: 100 }));


