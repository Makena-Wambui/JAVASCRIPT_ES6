// passing undefined versus other falsy values

function test(num = 1) {
    console.log(num, typeof num);
}

test(); // 1 number
// even when the first argument is explicitly set to undefined, te value of the num argument is still the default.

test(undefined); // 1 number

// if other falsy values that is(0, -0, null, false, NaN, or ''), are passes:

test(0); // 0 number
test(-0); // -0 number
test(null); // null object
test(false); // false boolean
test(''); // string
test(NaN); // NaN number

//console.log(typeof NaN);
test(2); // 2 number

// Evaluation at Call Time
// The default value is evaluated at call time, so a new object is created each time the function is called, unlike in Python where the default value is evaluated at function definition time.

function test2(value, myArr = []) {
    myArr.push(value);
    return myArr;

}

console.log(test2(1)); // [1]
console.log(test2(2)); // [2]

function test3(value, myArr) {
    myArr = [1, 2];
    myArr.push(value);
    return myArr;
}

console.log(test3(3)); // [1, 2, 3]
console.log(test3(4)); // [1, 2, 4]


function callSomething(thing = something()) {
    return thing;
}


let timesCalled = 0;
function something() {
    timesCalled += 1;
    return timesCalled;
}

console.log(callSomething(100)); // 100
console.log(callSomething()); // 1
console.log(callSomething()); // 2
console.log(callSomething(200)); // 200


// Earlier Parameters are available to later default parameters
function greet(name, greeting, message = `${greeting}, ${name}`) {
    return [name, greeting, message];
}

console.log(greet('Alicia', 'Hello'));
console.log(greet('Alicia', 'Hello', 'I miss you!'));


