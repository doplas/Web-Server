// Returning CSV response:

const http = require("http");

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "text/csv"); // Content-type indicates a CSV file is being returned (text/csv)
    res.setHeader("Content-Disposition", "attachment;filename=oceanpals.csv"); // Content-Disposition tells the browser how to display the data.  This informs the browser that it is an attachment named 'oceanpals.csv' and that it should be downloaded
    res.writeHead(200);
    res.end(`id,name,email\n1,Sammy Shark,shark@ocean.com`); // \n splits the string into two lines, one head and one row, all seperated with commas
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});