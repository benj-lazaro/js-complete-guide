// Import packages body-parser & Express.js
const express = require("express");
const bodyParser = require("body-parser");

// Import routes
const locationRoutes = require("./routes/location");

// Instantiate an Express.js object
const app = express();

// Parse incoming HTTP request body & return a parsed "request" object in JSON data format
app.use(bodyParser.json());

// Instruct Express.js to funnel incoming HTTP requests through the registered routes
app.use(locationRoutes);

// Listen to incoming HTTP request on Port 3000
app.listen(3000);
