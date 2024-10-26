// we first include the nodejs http module.
import { createServer } from 'node:http'; 

const port = 9000;
const host = '127.0.0.1';

// createServer method of http module creates a new HTTP server and returns it
// When a new request is received, the request event is triggered;
// providing two objects: request(http.IncomingMessage) and response(http.ServerResponse).
// these two objects are essential for handling the HTTP call.
// request object provides request details: request method, request URL, request headers, etc.
// response object is used to send the data back to the client.
// set statusCode property to 404 to indicate that the requested resource is not found.
// we also set the Content-Type header to text/plain using setHeader method.
// Then close the response, and add its content as an argument to the end method.

const myServer = createServer((request, response) => {
    response.statusCode = 404;
    response.setHeader('Content-Type', 'text/plain');
    response.end("Not Found");
})

// server listens on the specified port and hostname
// when the server is ready the callback function is called.
myServer.listen(port, host, () => {
    console.log('N/A');
})
