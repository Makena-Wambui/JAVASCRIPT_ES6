// Similar to Promise.all()
// But only waits for the first settled promise( either resolved or rejected)
// And returns their result or error
// If all promises are rejected, then the first rejected promise error is returned
// If all promises are resolved, then the first resolved promise result is returned

Promise.race([
    new Promise((resolve, reject) => {
    setTimeout(() => resolve("Second"), 2000)
}),
    new Promise((resolve, reject) => {
    setTimeout(() => resolve("First"), 1000)
}),
    new Promise((resolve, reject) => {
    setTimeout(() => reject("Third"), 3000)
})
])
.then(console.log)

// After the first settled promise wins the race, the other promises are ignored
