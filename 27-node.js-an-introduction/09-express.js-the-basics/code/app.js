// Import Express.js
const express = require("express");

// Create a Express.js object
const app = express();

// Setup a HTTP response header
app.use((request, response, next) => {
  response.setHeader("Content-Type", "text/html");
  next();
});

// Send a sHTTP response
app.use((request, response, next) => {
  response.send("<h1>Greetings from the local webserver!</h1>");
});

// Listen to incoming HTTP request at Port 3000
app.listen(3000);
