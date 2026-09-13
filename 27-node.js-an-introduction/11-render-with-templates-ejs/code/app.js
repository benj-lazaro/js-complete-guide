// Import packages Express.js & body-parser
const express = require("express");
const bodyParser = require("body-parser");

// Create a Express.js object
const app = express();

// Set "ejs" as the HTML template parsing engine
app.set("view engine", "ejs");

// Set the location of the HTML templates (i.e. views)
app.set("views", "views");

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

  // Render HTML template using "ejs" & send the HTTP response to the client
  response.render("index", {
    user: userName,
  });
});

// Listen to incoming HTTP request at Port 3000
app.listen(3000);
