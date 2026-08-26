export class Map {
  constructor(coords) {
    this.coordinates = coords;
    this.render;
  }

  render(coordinates) {
    document.getElementById("map").innerHTML = "";

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
  }
}
