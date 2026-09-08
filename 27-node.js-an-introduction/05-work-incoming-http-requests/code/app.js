const http = require("http");

// Create a local web server
const server = http.createServer((request, response) => {
  response.write("Greetings from the local web server!");
  response.end();
});

// Starts the local web server & listen to incoming HTTP request via port 3000
server.listen(3000);
