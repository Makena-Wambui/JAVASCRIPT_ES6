// The result is passed through the chain of .then handlers.
// Every call to a .then returns a new promise,
// So we can call another .then on it.

new Promise(function(resolve, reject) {
    // The initial promise resolves in 1 second
    setTimeout(() => resolve(10), 1000);
}).then(value => {
    // This handler is called.
    console.log(value); // 10
    // This creates a new promise with a value of 20
    return value * 2;
}).then(value => {
    // This then gets the result of the previous then
    // So it first logs 20
    console.log(value); // 20
    // Processes it hence creates a new promise with a value of 60
    return value * 3;
}).then(value => {
    // and so forth
    console.log(value); // 60
    return value * 4;
})

// We could add many .then to a single promise.
// This is not the same as above, ie it is not considered promise chaining.
// Here we just have several handlers to the same promise.
// THe result is not passed to each of them.
// They process the result independently.
// In practice, we rarely need multiple handlers for one promise.
//  Promise chaining is much more common.
let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(10), 1000);
})
promise.then(value => {
    console.log(value) // 10 ie the initial value
    console.log(value * 2); // 20 ie the initial value * 2
});
promise.then(value => {
    console.log(value) // 10 because it is still the initial value
    console.log(value * 3); // 30 because it is the initial value * 3
});
