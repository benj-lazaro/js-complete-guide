// Import Express.js
const express = require("express");

// Import MongoDB
const mongodb = require("mongodb");
const { MongoClient } = mongodb;

// Create an Express.js Router
const router = express.Router();

// MongoDB cloud service URL w/ credentials
const url =
  "mongodb+srv://benj:fKxiCNqt7GhaCEG5@cluster0.nbao964.mongodb.net/?appName=Cluster0";

// Create a MongoDB client
const client = new MongoClient(url);

// Tentative (in-memory) storage
const locationStorage = {
  locations: [],
};

// Register routes
router.post("/add-location", async (request, response, next) => {
  try {
    await client.connect();
    const database = client.db("locations");
    const collection = database.collection("user-locations");

    // Create a new document to be inserted
    const doc = {
      address: request.body.address,
      coords: { latitude: request.body.lat, longitude: request.body.lon },
    };

    const result = await collection.insert(doc);

    response.json({ message: "Stored location!", locId: result.insertedId });

    console.log(
      `${result.insertedCount} location documents were inserted with the _id: ${result.insertedId}`,
    );
  } catch (error) {
    console.log(error);
  }
});

router.get("/location/:lid", async (request, response, next) => {
  // Retrieve data for a given location ID
  const locationId = request.params.lid;
  console.log(locationId);

  try {
    await client.connect();
    const database = client.db("locations");
    const collection = database.collection("user-locations");

    const query = {
      _id: new mongodb.ObjectId(locationId),
    };

    const location = await collection.findOne(query);

    if (!location) {
      res.status(404).json("Not Found!");
      return;
    }

    response.json({
      message: "Retrieved location!",
      coordinates: location.coords,
      address: location.address,
    });
  } catch (error) {
    console.log(error);
  }
});

// Export this file or more specifically the routes
module.exports = router;
