/*
new Promise((resolve, reject) => {
    noSuchFunc(); // called an nonexistent function so error is thrown
})
.then(() => {
    // successful handlers
})
// no .catch at the end
// Like we said be4, in case of an error, the promise becomes rejected.
// And execution should jump to the nearest error handler.
// But in our example, there is None.
// Hence the script dies with a message on the console.
// The JS engine tracks such rejections, and generates a global message that will be displayed on the console.
*/


// In the browser, we can catch such errors using the event unhandledrejection
/*
window.addEventListener('unhandledrejection', (event) => {
    // event object has two special properties
    console.log(event.promise); // the promise that generated the error [object Promise]
    console.log(event.reason); // the unhandled error object Error: Error!
})
new Promise((resolve, reject) => {
    throw new Error("Error!");
})
.then(() => {
    // successful promise handler
})
// so there is no catch to handle the error
*/

// Error in SetTimeOut
// Why dooes catch ot catch the error thrown in setTimeout?
// When you throw an error inside the synchronous part of a promise executor function,
// the .catch method will catch it.
// In the code below, the error is thrown in the SetTimeOut callback, which is executed asynchronously.
// setTimeOut does not know about the promise.
// so the error it throws is not caught by the promise's .catch method
// The promise executor function has already finished execution by the time the callback in Settimeout runs

new Promise((resolve, reject) => {
    setTimeout(() => {
        // so this is a regular unhandled exception and will not be caught by the promise's .catch.
        throw new Error("Whoops!")
    }, 3000);
})
.catch((err) => {
    console.log(`Successfully handled ${err}`);
})
// To catch errors in asynchronous code, you must use reject to explicitly reject the promise
new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Whoopie!")), 2000)
})
.catch((error) => console.log(`Successfully caught ${error}`))

