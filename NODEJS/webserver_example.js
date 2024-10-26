const { createServer } = require('node:http');

const hostName = '127.0.0.1';
const port = 3000;

const server = createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end("Hello World");
})

server.listen(port, hostName, () => {
    console.log(`Server running at http://${hostName}:${port}/`);
})
