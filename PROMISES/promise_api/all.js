// There are 6 static methods in the Promise class

// Promise.all
// ------------
// When we want many promises to execute in parallel, and wait until all of them are ready.
// eg download several urls in parallel and process the content when all are done.
// This is where you use Promise.all
// Syntax: Promise.all(iterable)
// Promise.all() takes an iterable: an array of promises, and returns a new promise.
// The new promise resolves when all of the promises in the iterable argument have resolved.
// The array of their results becomes the new promise's result.
// If any of the passed-in promises reject, the promise returned by all immediately rejects with the value of the promise that rejected, discarding all the other promises.
// If an empty iterable is passed, the promise returned by all resolves immediately.
// If all the passed-in promises are resolved, the promise returned by all is resolved with an array of their results.
// The results are in the same order as the promises passed to Promise.all.

// Example 1
Promise.all([])
.then(console.log)

// Example 2
Promise.all([
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(4), 4000)
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(2), 2000)
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(1), 1000)
    })
])
.then((result) => {
    console.log(`All promises are resolved: ${result}`);
})

// How to use Promise.all to fetch data from multiple urls,
// and handle the results when all promises are resolved.
// Define an array of urls
// This array contains 3 GitHub API endpoints, each corresponding to a particular user.
let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig'
];

// Map over the array of urls, and fetch data from each url
// we are using the map method to iterate over each url in urls array
// for each url, we call fetch(url) to fetch data from the url
// fetch returns a promise, which resolves with the response to the request
// the result is an array called promises, which contains 3 promises
let promises = urls.map((u) => fetch(u));

// then we use promise.all to wait for all promises to resolve
// promise.all takes an array of promises, and returns a new promise that resolves when all of the promises in the iterable argument have resolved

Promise.all(promises)
// then is triggered once all promises are resolved, once all fetch requests are complete
// responseObjects is an array of response objects from the fetch requests
// each response object contains metadata about the response, such as status, headers, url, etc.
.then((responseObjects) => {
    // we iterate over each response object in the responseObjects array using map
    responseObjects.map((response) => {
        console.log(`Response URL: ${response.url}, Response Status: ${response.status}`);
    })
})

let userNames = ['iliakan', 'remy', 'jeresig']; 

// for each name in the userNames array, we fetch data from the GitHub API
let fetchPromises = userNames.map((name) => fetch(`https://api.github.com/users/${name}`))

Promise.all(fetchPromises)
// myResponseObjects is an array of response objects from the fetch requests
.then((myResponseObjects) => {
    // iterate over each response object in the myResponseObjects array using a for loop
    let responseObj;
    for (responseObj of myResponseObjects) {
        console.log(`Response URL: ${responseObj.url}, Response Status: ${responseObj.status}`);
    return myResponseObjects;
    }
})
// response.json() returns a promise that resolves with the result of parsing the response body as JSON
.then((myResponseObjects) => {
    // for each response object in the myResponseObjects array, we call response.json() to parse the response body as JSON

    let parsedData = myResponseObjects.map((rObj) => rObj.json());
    return Promise.all(parsedData)
})
.then((userData) => {
    // userData is an array of user data objects
    // each user data object contains information about a GitHub user
    userData.map((user) => {
        console.log(`User Name: ${user.name}, User Location: ${user.location}`);
    })
})

// Rejected promise in Promise.all
// If any of the promises is rejected,
// the promise returned by Promise.all immediately rejects with the value of the promise that rejected
Promise.all([
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10)
        }, 2000)
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Rejected promise"))
        }, 4000)
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(20)
        }, 1000)
    })
])
.catch((err) => {
    console.log(`Promise.all rejected with: ${err}`);
})

// The iterable argument
// Usually the iterable is an array of promises.
// But if any of those objects in the iterable is not a promise, then it is passed to the resulting array as-is.
// If you pass a non-promise object, it is passed to the resulting array as-is.
Promise.all([
    new Promise((resolve, reject) => {
        resolve(10);
    }),
    20,
    'This is not a promise'
])
.then(console.log)
