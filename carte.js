/* PARTIE CARTE */
var map = L.map('map', {
  maxBounds: [[-60, -180], [85, 180]],
  maxBoundsViscosity: 1.0
}
).setView([48.866667, 2.333333], 2.4);

L.tileLayer('https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.{ext}', {
  minZoom: 2,
  maxZoom: 10,
  attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  ext: 'png'
}).addTo(map);



fetch('data_pays_labubu.json')
  .then(response => response.json())
  .then(data => {
    data.forEach((item) => {
      var marker = L.marker([item.latitude, item.longitude]).addTo(map);
      marker.bindPopup("<h1>" + item.pays + "</h1><br>I am a popup. <br>" + item.latitude + " " + item.longitude);
    })
  });

console.log("test")