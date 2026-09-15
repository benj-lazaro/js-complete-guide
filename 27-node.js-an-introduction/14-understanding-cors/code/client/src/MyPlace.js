import { Map } from "./UI/Map";

class LoadedPlace {
  constructor(coordinates, address) {
    // Instantiate a new object from Class "Map"
    new Map(coordinates);

    const headerTitleElement = document.querySelector("header h1");
    headerTitleElement.textContent = address;
  }
}

// Constructor function URL to parses the browser's full URL & return an object
const url = new URL(location.href);

// Extract the key-value query parameters from the parsed URL
const queryParams = url.searchParams;

// Get the coordinates
// Returned values formatted as a string value; require coercion to number using parseFloat() & + operator
const coordinates = {
  latitude: parseFloat(queryParams.get("lat")),
  longitude: +queryParams.get("lon"),
};

// Get the address
const address = queryParams.get("address");

// Instantiate the Class "LoadedPlace", pass extracted data to render map in the DOM
new LoadedPlace(coordinates, address);
