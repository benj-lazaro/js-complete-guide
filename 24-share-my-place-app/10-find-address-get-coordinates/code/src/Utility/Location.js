export async function getCoordsFromAddress(address) {
  // Use OpenStreetMap's geocoding service
  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&q=${encodeURIComponent(address)}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch coordinates. Please try again.");
  }

  const data = await response.json();

  console.log(data);

  //   if (data.error_message) {
  //     throw new Error(data.error_message);
  //   }

  //   const coordinates = data.results[0].geometry.location;
  //   return coordinates;
}
