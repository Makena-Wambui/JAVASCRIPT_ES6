// When a promise rejects, the control jumps to the closest rejection handler.
// For example, the url passed to fetch here is wrong so the promise rejects.
fetch("https://no-such-url")
.then((response) => response.json())
.catch((error) => console.log(error)) // fetch failed

// .catch does not have to be immediate.
// can appear after one or several .then

// Everything could be alright with the site.
// However the response could be invalid json.
// To catch all errors, the easiest way is to append .catch to the end of the chain.

fetch("/article/promise-chaining/user.json")
.then((response) => response.json())
.then((data) => {
    return fetch(`https://api.github.com/users/${data.name}`)
})
.then((response) => response.json())
.then((githubUserData) => new Promise((resolve, reject) => {
    let image = document.createElement("img");
    image.src = githubUserData.avatar_url;
    document.body.append(image);

    setTimeout(() => {
        image.remove();
        resolve(userData);
    }, 4000);
}
))
.then((githubUserData) => `Showing the avatar of ${githubUserData.name}`)
.catch((error) => console.log(error.mesage))
// If any of the promise above rejects, for ex a network error, or invalid json,
// then .catch would handle it.
