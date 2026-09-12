// Import packages Express.js & body-parser
const express = require("express");
const bodyParser = require("body-parser");

// Create a Express.js object
const app = express();

// Parse the incoming HTTP request body; implicitly returns a parsed "request" object
// The object property "extended" controls how the request body is parsed
app.use(bodyParser.urlencoded({ extended: false }));

// Setup a HTTP response header
app.use((request, response, next) => {
  response.setHeader("Content-Type", "text/html");
  next();
});

// Send a HTTP response
app.use((request, response, next) => {
  // Null propagation used on "request.body" to addressed returned "undefined" value
  const userName = request.body?.username || "Unknown User";

  response.send(
    `<h1>Hello ${userName}</h1><form method="POST" action="/"><input name="username" type="text"><button type="submit">Send</button></form>`,
  );
});

// Listen to incoming HTTP request at Port 3000
app.listen(3000);
