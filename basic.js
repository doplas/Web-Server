// Main code that contains the function to create the server

const http = require("http");

// localhost = 127.0.0.1 | this could also be a domain or ip address
const host = 'localhost';

// Default http port.  Can also use 8080
const port = 8000;

// Request listener function.  This handles an incoming HTTP request and returns a HTTP response.
// This must have two arguments, a request object and a response object.  The request object captures
// all the data of the HTTP request that's coming in.  The response object is used to return HTTP responses 
// for the server.

/**
 * req is the requested object, res is the response object
 * @param {*} req 
 * @param {*} res 
 */
const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("My first server!");
};

// Server is then created with the below:
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});