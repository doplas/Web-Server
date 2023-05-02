// Responding with a HTML file.  Chunks of code commented out do work, however they are not as efficient as the uncommented code.
// The commented code will reload the HTML file everytime it is requested, the uncommented code will store the contents of the file in the variable 'indexFile' and can be used if requested again

const http = require("http");
const fs = require('fs').promises; // This module contains the readFile() function that is needed to load the HTML file in place.  Promise variant sticks to the modern JavaScript best practices

const host = 'localhost';
const port = 8000;

let indexFile;

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(indexFile);
}

// const requestListener = function (req, res) {
//     fs.readFile(__dirname + "/index.html") // fs.readFile() loads the file, __dirname being the absolute path of where the Node.js code is being run.  /index.html is appended to load the HTML file
//         .then(contents => {
//             res.setHeader("Content-Type", "text/html");
//             res.writeHead(200);
//             res.end(contents);
//         })
//         // fs.readFile() functions can fail, so it is important to catch the error and handle it:
//         .catch(err => {
//             res.writeHead(500);
//             res.end(err);
//             return;
//         });
// };

const server = http.createServer(requestListener);

fs.readFile(__dirname + "/index.html")
    .then(contents => {
        indexFile = contents;
        server.listen(port, host, () => {
            console.log(`Server is running on http://${host}:${port}`);
        });
    })
    .catch(err => {
        console.error(`Could not read index.html file: ${err}`);
        process.exit(1);
    });

// server.listen(port, host, () => {
//     console.log(`Server is running on http://${host}:${port}`);
// });