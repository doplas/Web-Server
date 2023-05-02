// Returning a JSON reponse:

const http = require("http");

const host = 'localhost';
const port = 8000;

// Have the requestListener() return the apporpriate header all JSON responses have
const requestListener = function (req, res) {
    res.setHeader("Content-Type", "application/json"); // Adds HTTP header to the response
    res.writeHead(200);
    res.end(`{"message": "This is a JSON response"}`);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});