// Import Express.js
const express = require("express");

// Create an Express.js Router
const router = express.Router();

// Tentative (in-memory) storage
const locationStorage = {
  locations: [],
};

// Register route(s) & HTTP method(s)
router.post("/add-location", (request, response, next) => {
  const id = Math.random();

  locationStorage.locations.push({
    id: id,
    address: request.body.address,
    coords: { lat: request.body.latitude, lon: request.body.longitude },
  });

  // Send HTTP response in JSON data format to the client
  response.json({
    message: "Stored location",
    locationId: id,
  });
});

router.get("/location", (request, response, next) => {});

// Export this file or more specifically the routes
module.exports = router;
