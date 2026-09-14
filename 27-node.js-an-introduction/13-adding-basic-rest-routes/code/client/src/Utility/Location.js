// Function that fetches the coordinates of a user's current location using OpenStreetMap's Geocoding
export async function getCoordsFromAddress(address) {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&q=${encodeURIComponent(address)}`,
  );

  // Check if HTTP request is successful
  if (!response.ok) {
    throw new Error("Failed to fetch coordinates. Please try again.");
  }

  // Received HTTP response in JSON format
  const data = await response.json();
  // console.log(data);

  // Check the returned data
  if (data.error_message) {
    throw new Error(data.error_message);
  }

  // Extract the latitude & longitude data from JSON data
  const coordinates = {
    latitude: data[0].lat,
    longitude: data[0].lon,
  };
  return coordinates;
}

// Function that fetches the named address based on given coordinates using OpenStreetMap's Geocoding
export async function getAddressFromCoords(coordinates) {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/reverse?lat=${coordinates.latitude}&lon=${coordinates.longitude}&format=jsonv2`,
  );

  // Check if HTTP request is successful
  if (!response.ok) {
    throw new Error("Failed to fetch address. Please try again.");
  }

  // Received HTTP response in JSON format
  const data = await response.json();
  // console.log(data);

  // Check the returned data
  if (data.error_message) {
    throw new Error(data.error_message);
  }

  // Extract & stringify the named address from JSON data
  const address = JSON.stringify(data.display_name);
  return address;
}
