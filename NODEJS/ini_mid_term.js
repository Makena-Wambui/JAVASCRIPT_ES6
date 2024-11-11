// This is the end point of the operation
// This function provides the final output of the process that will be logged to the console via the callback function in the initiator function
function terminator(input, callback) {
  modifiedInput = `${input} and terminated by executing callback`;
  callback(modifiedInput);
}
// This is the intermediary function in the sequence
// Modifies the data it receives then passes it along to the next function in the sequence
// Takes the input, appends a string to it, then passes the modified input along with a callback function to the next function in the sequence
function middleware(input, callback) {
  modifiedInput = `${input} that is modified by middleware`;
  return terminator(modifiedInput, callback);
}

// Iniitiator function is the starting point/entry point of the process
// It initializes the process by setting up an input someInput,
// and then calls the next functionin the sequence, middleware, with the input
function initiator() {
  const someInput = "Hello, this is a function";
  middleware(someInput, (result) => {
    console.log(result);
  });
}

initiator();
