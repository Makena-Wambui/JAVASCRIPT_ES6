// Promise.resolve(value) creates a resolved promise with the result value.
// It is equivalent to  new Promise(resolve => resolve(value) )
// This method is used when a function is expected to return a promise

// loadCached function belowfetches a URL and caches its contents
// We store the fetched content in a Map object
// Future calls with the same url, previous content will be retrieved from the cache
// But we use Promise.resolve to return the cached content as a promise


// This function always returns a promise
// so we can call it like this loadCached(url).then(...)
let myCache = new Map();
function loadCached(url) {
    if (myCache.has(url)) {
        return Promise.resolve(myCache.get(url));

    }
    return fetch(url)
    // Fetch the content
    .then((response) => response.text())
    // Store the fetched content in the cache
    .then((data) => {
        myCache.set(url, data)
        return data;
    })

}

// Promise .reject(err) creates a rejected promise with the given error
// It is equivalent to: new Promise((resolve, reject) => reject(err))
