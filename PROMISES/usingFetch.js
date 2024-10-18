// In Frontend programming, promises are often used to make network requests.
// Use fetch() to load infor about the user from the remote server.
// fetch has a lot of optional params, but the basic syntax only requires a URL.

 /* fetch(url) makes a network request to the URL and returns a promise. */
 // The promise resolves with a response object when the remote server responds with headers,
 // but before the full response is downloaded.

 // To get the full response, we call response.text()
 // This method returns a promise,
 // That resolves when the full text is downloaded from the remote server, with the text as a result.

 // example: make a request to the server and log the response text to the console.
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.text())
    .then((text) => console.log(text));

// response object returned from fetch() also has the method response.json()
// This method reads the remote data and parses it as JSON.
// It returns a promise that resolves with the parsed JSON data.
fetch("https://api.github.com/users/Makena-Wambui")
    .then((response) => response.json())
    .then((dataJson) => console.log(dataJson.name));


// lets do someting with the data
fetch("https://api.github.com/users/Makena-Wambui")
.then((response) => response.json()) // returns a promise that resolves with the parsed JSON data.
.then((userData) => {
    // show the user's avatar
    let img = document.createElement('img');
    img.src = userData.avatar_url;
    document.body.append(img);

    setTimeout(() => img.remove(), 4000);
})
// How do we do something after the avatar has finished showing 
// and gets removed from the page?
// For example, show a form for editing the user's profile or something else.
// we can return a promise that resolves when the avatar finishes showing and gets removed.

fetch("https://api.github.com/users/Makena-Wambui")
// fetch returns a promise that resolves with a response object
.then((response) => response.json()) // returns a promise that resolves with the parsed JSON data.
.then((parsedData) => new Promise((resolve, reject) => {
    // extract the avatar URL from the parsed data
    let image = document.createElement("img");
    image.src = parsedData.avatar_url;
    document.body.append(image);

    setTimeout(() => {
        // remove the image after 4 seconds
        image.remove();
        // resolve the promise after the image is removed
        resolve(parsedData);
    }, 4000)
}))
.then((parsedData) => `Finished showing the avatar of ${parsedData.name}`)

// It is good practice for an asynchronous action to return a promise.
// So we can plan actions after it.
// Even if we are not extending the chain now,
// we might want to do so later.
// Let us split the code in reusable functions.
function loadJSON(URL) {
    return fetch(URL)
    .then((response) => response.json())
}

function loadGithubUserName(name) {
    return loadJSON(`https://api.github.com/users/${name}`)
}

function showAndRemoveAvatar(userName) {
   return new Promise((resolve, reject) => {
    let image = document.createElement("img");
    image.src = userName.avatar_url;
    document.body.append(image);

    setTimeout(() => {
        image.remove();
        resolve(userName);
    }, 3000);
   })
}

// lets use theses functions
loadGithubUserName("Makena-Wambui")
.then(showAndRemoveAvatar)
.then(userName => console.log(`Finished showing the avatar of ${userName.name}`));

