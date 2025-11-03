/* PARTIE CARTE */
let map = L.map('map', {
/*   attributionControl: false, */
  maxBounds: [[-60, -180], [84, 180]],
  maxBoundsViscosity: 1.0,
  minZoom: 2.2,
  maxZoom: 5,
}
).setView([48.866667, 2.333333], 2.4);

const BASEMAP_ID = "fee4b52b102c4371a76bbcb03aa51283";
const API_KEY = "AAPTxy8BH1VEsoebNVZXo8HurBOs35bG4WgeJXCdQmS-h4OUQ9jtKQUAbYP_uCTi0vyXlsZhXPzT1i_jB-1itZLH3uqRqnqP_32gm2Zdx_u01Svb3BGy6_3K9U0NiyJ0_W5gHIzOMj8zVzTpGzq7foLrN8MEVb0IClZA49O7x1yRhxqlSlXBjdrAUc_nD7I_xXVmYDjomqzs2ERXe82CQoJ9VfYPv5w6EpA2X3Y6xeBPY44.AT1_4yuKA1Il";

L.esri.Vector.vectorBasemapLayer(BASEMAP_ID, {
  apiKey: API_KEY
}).addTo(map);


fetch('data_pays_labubu.json')
  .then(response => response.json())
  .then(data => {
    data.forEach((item) => {
      if (item.valeur > 0 && item.valeur <= 25) {
        let marker = L.marker([item.latitude, item.longitude], { icon: petitLabubu }).addTo(map);
        marker.bindPopup("<h1>" + item.pays + "</h1>" + item.valeur + "<br>" + item.latitude + " " + item.longitude);
      }

      else if (item.valeur > 25 && item.valeur < 75) {
        let marker = L.marker([item.latitude, item.longitude], { icon: moyenLabubu }).addTo(map);
        marker.bindPopup("<h1>" + item.pays + "</h1>" + item.valeur + "<br>" + item.latitude + " " + item.longitude);
      }

      else {
        let marker = L.marker([item.latitude, item.longitude], { icon: grandLabubu }).addTo(map);
        marker.bindPopup("<h1>" + item.pays + "</h1>" + item.valeur + "<br>" + item.latitude + " " + item.longitude);
      }
    })
  });


let petitLabubu = L.icon({
  iconUrl: 'MarkersLabubu/labubu_marker_rouge2.png',
  iconSize: [40, 40], // size of the icon
  iconAnchor: [26, 40], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -35] // point from which the popup should open relative to the iconAnchor
});

let moyenLabubu = L.icon({
  iconUrl: 'MarkersLabubu/labubu_marker_bleu - Copie.png',
  iconSize: [50, 50], // size of the icon
  iconAnchor: [26, 40], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -35] // point from which the popup should open relative to the iconAnchor
});

let grandLabubu = L.icon({
  iconUrl: 'MarkersLabubu/labubu_marker_vert2.png',
  iconSize: [60, 60], // size of the icon
  iconAnchor: [30, 56], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -35] // point from which the popup should open relative to the iconAnchor
});

console.log("test")