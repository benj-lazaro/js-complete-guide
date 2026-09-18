// Import Express.js
const express = require("express");

// Create an Express.js Router
const router = express.Router();

// Tentative (in-memory) storage
const locationStorage = {
  locations: [],
};

// Register routes
router.post("/add-location", (request, response, next) => {
  const id = Math.random();

  locationStorage.locations.push({
    id: id,
    address: request.body.address,
    coords: { latitude: request.body.lat, longitude: request.body.lon },
  });

  // Send HTTP response in JSON data format to the client
  response.json({
    message: "Stored location",
    locationId: id,
  });
});

router.get("/location/:lid", (request, response, next) => {
  // Retrieve data for a given location ID
  const locationId = +request.params.lid;

  const location = locationStorage.locations.find((location) => {
    return location.id === locationId;
  });

  // If location is NOT found
  if (!location) {
    // Send back a HTTP response status code 404 w/ custom message
    return response.status(404).json({ message: "Not found" });
  }

  // Otherwise, send JSON data back to the client
  return response.json({
    address: location.address,
    coordinates: location.coords,
  });
});

// Export this file or more specifically the routes
module.exports = router;
