//Waits for the first fulfilled promise and returns its value
// If all of the given promises reject, then the returned promise is rejected with an AggregateError, a new subclass of Error that groups together individual errors.
// Aggregate Error is a special error object that stores all promise errors in the errors property.

Promise.any([
    new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Error 1"))
        }, 1000)
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => resolve("Resolved 1"), 2000)
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => resolve("Resolved 2"), 3000)
    })
])
.then(console.log)

// When all promises reject
Promise.any([
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error("First Rejected")), 1000)
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error("Second Rejected")), 2000)
    })
])
.catch((error) => {
    // error is the special AggregateError object
    // the value of the errors property is an array of individual errors
    console.log(error.constructor.name);
    console.log(error.errors);
    console.log(error.errors[0].message);
    console.log(error.errors[1].message);
})
