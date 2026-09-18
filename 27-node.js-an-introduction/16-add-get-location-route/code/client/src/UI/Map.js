export class Map {
  constructor(coords) {
    this.render(coords);
  }

  // Method that accepts the coordinates & renders the map
  render(coordinates) {
    document.getElementById("map").innerHTML = "";

    // Create a new instance of OpenLayers map
    const map = new ol.Map({
      target: "map",
      layers: [new ol.layer.Tile({ source: new ol.source.OSM() })],
      view: new ol.View({
        center: ol.proj.fromLonLat([
          coordinates.longitude,
          coordinates.latitude,
        ]),
        zoom: 16,
      }),
    });

    // Create a marker
    const marker = new ol.Feature({
      geometry: new ol.geom.Point(
        ol.proj.fromLonLat([coordinates.longitude, coordinates.latitude]),
      ),
    });
  }
}
