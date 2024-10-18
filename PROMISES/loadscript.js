/*
 Lets demonstrate promise chaining in JS.

 We are loading multiple scripts in JS sequentially.
 That is we are loading them one after the other, using promises.
 So script2 will be loaded only after script1 is loaded etc.
 */

 // First we call loadScript() which is a function that loads an external script.
 // It returns a promise that resolves when the script is loaded and rejects if it fails.
// Chaining is done with .then meaning the next script is not loaded,
// until the previous one is loaded successfully. ie the previous promise is resolved.
// If any call to loadScript fails, the error is propagated down the chain,
// unless there is a catch block to handle it.

 /*
 loadScript("/script1.js")
 // this .then block is triggered when loadScript("/script1.js") is resolved
 // script param is the result of loading the first script
 // returns a call to loadScript("/script2.js") which also returns a promise
 .then(script => loadScript("/script2.js"))
 .then(script => loadScript("/script3.js"))
 // in this third block,
 // we call functions defined in the loaded scripts,
 // to confirm that the scripts were indeed loaded
 .then(
    script => {
        // use functions declared in script1
        one();
        // use functions declared in script2
        two();
        // use functions declared in script3
        three();
    }
 )

 // We could add .then directly to the loadScript() function like this:
 // This does the same as the above code.
 // But the previous code is more readable.
 // Also this code grows to the right, and becomes hard to read.
 // Unlike the other code which grows downwards.
 // Therefore chaining is better done with separate .then blocks.
 loadScript("/script1.js").then(
    script1 => loadScript("/script2.js").then(
        script2 => loadScript("/script3.js").then(
            script3 => {
                // use functions declared in script1
                one();
                // use functions declared in script2
                two();
                // use functions declared in script3
                three();
            }

        )
    )
 )
*/


 // Thenable objects
    // A thenable object is an object that has a .then method.
    // It can be used in a promise chain.
    // It is not a promise, but it is promise-like.
    // It is a promise-compatible object.
    // It is an object that behaves like a promise.
    // An object can be treated as a promise as long as it implements the then method.

class Thenable {
    // Thenable class is initialized with a number num, passed to the constructor
    constructor(num) {
        this.num = num;
    }
    // The then method is called with two functions resolve and reject,
    // making it compatible with promises.

    then(resolve, reject) {
        // We use setTimeout to simulate an asynchronous operation.
        // The operation takes 1 second to complete.
        // resolve function is called with this.num * 2 after 1 second.

        setTimeout(() => resolve(this.num * 2), 1000);
    }
}

// Lets now create a promise.
// This promise immediately resolves with a value of 1.
new Promise(resolve => resolve(5))
.then((result) => {
    // value 1 is passed to the Thenable constructor.
    // This creates a new Thenable object with num = 1.
    // This thenable object has a then method so it is treated like a promise.
    //The then method of thenable is invoked with a resolve function.
    // After one second, resolve(1 * 2) is called.
    // This resolves the promise with the value 2.
    return new Thenable(result);
})
// This .then method is then triggered, logging the value 2 to the console.
.then(console.log); 
