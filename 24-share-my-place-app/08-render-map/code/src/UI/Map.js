export class Map {
  constructor(coords) {
    this.render(coords);
  }

  // Method that renders the map in the DOM
  render(coordinates) {
    // Check access to Google Maps API
    if (!google) {
      alert("Could NOT load maps library, please try again later!");
      return;
    }

    // Instantiate a Google Map object
    const map = new google.map.Map(document.getElementById("map"), {
      center: coordinates,
      zoom: 16,
    });

    // Instantiate a Google Map marker (pin)
    new google.map.Marker({
      position: coordinates,
      map: map,
    });
  }
}
