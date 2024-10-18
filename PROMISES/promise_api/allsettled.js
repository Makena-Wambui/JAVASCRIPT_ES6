// if any promise rejects in Promise.all(), then Promise.all as a whole rejects
// This is good when we need all results successful in order to proceed
// For example, we need to fetch data from multiple sources and we need all of them to be successful before rendering the page
/*
Promise.all([
fetch('template.html'),
fetch('style.css'),
fetch('data.json')
])
.then(renderPage) // renderPage() will be called only when all promises are resolved
.catch(error => console.error(error));
*/

// Promise.allSettled() is a new method that waits for all promises to be settled (either resolved or rejected)
// Does not matter if some promises reject, Promise.allSettled() waits for all of them to complete
// The result is an array of objects.
// For resolved promises, the object will have: status: 'fulfilled', value: result
// For rejected promises, the object will have: status: 'rejected', reason: error

// For example, when fetching infor about multiple users, we are still interested in the other users even if one of them fails
// Lets provide an array of urls
const urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://no-such-url'
];
let promises = urls.map((u) => fetch(u));

Promise.allSettled(promises)
.then((objectsArray) => {
    // objectsArray is an array of objects
    // lets iterate over it
    objectsArray.map((object, index) => {
        if (object.status === "fulfilled") {
            console.log(`URL at ${urls[index]} loaded successfully with ${object.value.status}`);
        }
        if (object.status === "rejected") {
            console.log(`URL at ${urls[index]} because of ${object.reason}`);
        }
    })
})
