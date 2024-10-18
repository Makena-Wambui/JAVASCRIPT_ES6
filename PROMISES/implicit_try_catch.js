// Implicit try...catch
// The code of a promise executor and promise handlers has an invisible try..catch around it.
// If an exception happens, it gets caught and treated as a rejection.
new Promise((resolve, reject) => {
    throw new Error("Whoops!");
})
.catch(console.log); // Error: Whoops!

// The code above is equivalent to this:
new Promise((resolve, reject) => {
    reject(new Error("Whoops!"));
})
.catch(console.log); // Error: Whoops!
// The invisible try...catch around the executor automatically catches the error and turns it into a rejection.
// This also happens in the promise handlers.
// If we throw inside .then handler, that means a rejection.
// Therefore control goes to the nearest error handler.
new Promise((resolve, reject) => resolve("ok"))
.then((value) => {
    throw new Error("Whoops!");
})
.catch(console.log); // Error: Whoops!
// Happens for all errors.
// Not just those caused by the throw statement, but also errors in the code.

new Promise((resolve, reject) => {
    resolve("ok");
})
.then((value) => {
    unknownFunction();
})
.catch(console.log)
// so .catch is not only for explicit rejections.
// It also catches errors in the handlers.

// Rethrowing
// We can have as many as .then handlers we may want.
// Then use a single .catch at the end to handle errors in the handlers above.

// Just like in a regular try...catch,
// we can analyze the error,
// and rethrow it if can't handle it.
// If we throw inside .catch,
// control goes to the next closest error handler.
// and if the error is handled and we finish normally,
// then control goes to the next successful .then handler.

// In this example, .catch successfully handles the error.
new Promise((resolve, reject) => {
    throw new Error("myError");
})
//.then(() => console.log("Next successful handler"));
.catch((err) => console.log(`Successfully handled the error: ${err}`))
.then(() => console.log("Next successful handler"));


// In this other example,
// .catch catches the error but can not handle it, so it rethrows it.
new Promise((resolve, reject) => {
    throw new Error("myError");
})
.catch((err) => {
    if (err instanceof URIError) {
        // handle it
        console.log(err);
    } else {
        console.log(`Can not handle ${err}`);
        // we rethrow the error or another error
        // execution jumps from this .catch to the next .catch down the chain
        throw err;
    }
})
.then(() => {
    // does not run
})
.catch((err) => {
    console.log(`Successfully handled ${err}`);
})
