export async function getCoordsFromAddress(address) {
  // Use OpenStreetMap's Geocoding service
  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&q=${encodeURIComponent(address)}`,
  );

  // Check if HTTP request transmission is successful
  if (!response.ok) {
    throw new Error("Failed to fetch coordinates. Please try again.");
  }

  // Received HTTP response in JSON format
  const data = await response.json();

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
