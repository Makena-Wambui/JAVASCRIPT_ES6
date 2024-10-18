/*
ANALOGY 1
----------
Imagine you are a famous singer like Rihanna.

Fans are asking you day and night for a new song.

You promise to send it to them once it is published.

You give them a list where they can fill in their email addreses.

So when the song becomes available, any subscriber will receive it.

And even if something goes very wrong, you will still be able to inform them about it.

Singer is happy because nobody is hounding them no more.
Fans are happy because they will get the song as soon as it is available.

This is a real life analogy for these following three programming concepts:
- Producing code : It does something which takes time.
                   Example: Fetching data from a server, or loading the data over the network.
                   This is the singer who is preparing the song.
                   
- Consuming code: Wants the result of the producing code once it is ready.
                Many functions may need that result.
                Example: Displaying the data, or saving it to a database.
                These are the fans who want the song.

- Promise: A special JS object.
           A link between producing code and consuming code.
           This is the list of subscribers.(subscription list)
           The producing code will take whatever time it needs to produce the result.
           The promise makes that result available to all of the subscribed code when it is ready.

           JS promises are more complex than a simple subscription list.
           They have additional features and limitations.


           Constructorsynatx for a promise object:
           let promise = new Promise(function(resolve,reject) {
               // executor ie the producing code
           });

           executor - is the function passed to new Promise.
           it is executed automatically when the promise is constructed.
           It contains the producing code which should eventually produce a result.
           The executor is the singer who is preparing the song.

           The args: resolve and reject are callbacks provided by JS itself.
           Our code is what will be inside the executor.

           When the executor obtains a result, it should call one of these callbacks:
              -resolve(value): job is finished successfully with result value.
              -reject(error): error occurred, error is the error object.

            Summary: The executor runs automatically and attempts to perform a job
                    When it is done with the attempt, it will call resolve if it was successful or reject if there was an error.
                    
                    
            promise object returned by new Promise constructor has internal properties:
            1. state: "pending" before the executor finishes.
                        "fulfilled" after resolve is called.
                        "rejected" after reject is called.

            2. result: "undefined" before the executor finishes.
                        "value" if the job finished successfully.
                        "error" if an error occurred.

            The executor eventually calls either resolve or reject and moves the propmise object to one of these states
            If an error occurs, reject is called with an error object.
            If everything is fine, resolve is called with the result.


            Examples below:

*/

// A promise constructor tht takes a simple executor function with producing code, that takes time via setTimeout()

let promise1 = new Promise(function(resolve, reject) {
    // This is the executor function
    // Here is the producing code
    // setTimeout is a built-in JS function that calls a function after a delay.
    // It calls the arrow function after 1000ms.
    // The arrow function calls resolve with the arugment "done"
    // So after one second, the promise will resolve with the result "done"
    setTimeout(() => resolve("done"),  1000);
});
// This is an example of a successful job completion; a fulfilled promise.
// The executor is called automatically and immediately (by new Promise)
// The executor runs the producing code
// It receives two arguments: resolve and reject
//these are predefined functions that we do not need to create ourselves.
// Only one of them should be called when ready.
// After 1 sec of processing, the exceutor calls resolve("done") to produce the result.
// This changes the promise object state from "pending" to "fulfilled" with the result "done"

// An example of the exeutor rejecting the promise with an error.
let promise2 = new Promise(function(resolve, reject) {
    //setTimeout(() => reject(new Error("Errror!!!")), 1000);
});

// This is an example of a rejected promise.
// The executor runs the producing code.
// It calls reject with an error object.
// The promise is rejected with that error object.
// The state changes from "pending" to "rejected" and the promise is now rejected.
// state: "rejected", result: Error: Error!!!

// A promise that is reolved/ rejected is said to be settled,
// as opposed to it being initially pending.


// The executor should only call one resove or reject.
// Any change in the promise object's state is final.
// All further calls to resolve and reject are ignored.

let promise3 = new Promise(function(resolve, reject) {
    resolve("First resolve call");

    reject(new Error("Whoops"));

    setTimeout(() => resolve("Second resolve call"), 1000);
});

// The first call to resolve is final.
// resolve/reject only expect one argument or none. Any extra arguments are ignored.

// In case something goes wrong, executor should call reject.
// You can pass any argument to reject, just like with resolve.
// It is recommended to pass an error object. or objects that inherit from Error.


// An executor usually does some job asynchronously,
// then calls reject/resolve after some time.
// It does not have to do this.
// resolve or reject can be called immediately.

let promise4 = new Promise(function(resolve, reject) {
    resolve("done");
});

// state and result are internal properties of a promise object.
// They can not be accessed directly.
// We can use the methods .then, .catch, .finally to access them.

// A promise object is a link between the executor(the producing code) and the consuming functions,
// which receive the result or error.
// Consuming functions can be registered using methods .then, .catch, .finally.

//.then
// -----
// Most important, fundamental promise method.
// SYNTAX:
// promise.then(
//  function(result) { }, // onFulfilled
//  function(error) { } // onRejected
// );
/*
The first argument of .then is a function that runs when the promise is resolved,
It receives the result.

The second argument of .then is a function that runs when the promise is rejected,
It receives the error.
*/

let promise5 = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(123), 1000);
});
promise5.then(
    result => console.log(result), // 123
    error => console.log(error) // not called because there is no error
);

// In case of a rejected promise, the second argument is called.
let promise6 = new Promise(function(resolve, reject) {
    setTimeout(() => reject(new Error("Error!!!")), 1000);
})
promise6.then(
    result => console.log(result), // not called
    error => console.log(error)
);

// If we are interested only in successful completions, we can provide only one argument to .then.
let promise7 = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("Success!"), 1000);
});

promise7.then(console.log);

// If interested only in errors,
// we can use null as the first argument ie .then(null, errorHandlingFunction(f))
// or we can use .catch(errorHandlingFunction(f))

let promise8 = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Damn!")), 1000);
});
promise8.then(null, console.log);

// Or u can use .catch
promise8.catch(console.log);

// CLEAN UP: FINALLY

/*
We use finally to set up a handler for performing cleanup,
or finalizing after the previous operations are completed.
eg stop loading indicator, close the file, close no longer needed resources.

Finally is a party finisher in a promise chain.

Finally is called when the promise is settled, regardless of the outcome.(fulfilled or rejected)

Difference between .finally(f) and .then(f, f)
- .finally(f) is similar to .then(f, f) in the sense that f always runs when the promise is settled.
- finally handler has no arguments. This is because in finally, we do not know whether the promise is successful or not.
- This is ok as finally's job is to perform general cleanup, not to process the result.
- The finally handler has no arguments.
- The promise outcome is handled by the next handler in the chain.

- finally handler passes through the result or error to the next suitable handler.


*/
// Result is passed through finally to then
new Promise((resolve, reject) => {
    setTimeout(() => resolve("Success!"), 1000);
})
.finally(() => console.log("Promise settled"))
.then(result => console.log(result), error => console.log(error));

// Error
new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Error!")), 1000);
})
.finally(() => console.log("Promise settled"))
.catch(console.log);

// Finally handler should not return anything.
// If it does, the returned value is ignored.
// If the finally handler throws an error, then that error is handled by the next handler in the chain, instaed of the previous outcome.
// And execution goes to the nearest error handler.

// If a promise is pending, .then/catch/finally wait for it to settle.(wait for its outcome)
// Sometimes, a promise is already settled when we attach a handler to it.
// In such a case, the handler will just run immediately
// This promise is resolved immediately upon creation.
let p = new Promise(resolve => resolve("done"))
p.then(console.log);

// setTimeout is a built-in JS function that calls a function after a delay.
// It uses callbacks.
// Lets create a promise based alternative.
// We have a function called delay that receives an argument of time in ms and returns a promise.
// So the promise resolves after ms miliseconds.
// So we can add .then to it.

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
delay(3000).then(() => console.log("runs after 3 seconds"));
