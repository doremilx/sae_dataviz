/* PARTIE CARTE */
var map = L.map('map', {
  maxBounds: [[-70, -180], [85, 180]],
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
      if (item.valeur > 0 && item.valeur <= 25){
      var marker = L.marker([item.latitude, item.longitude], {icon: petitLabubu}).addTo(map);
      marker.bindPopup("<h1>" + item.pays + "</h1>" + item.valeur + "<br>" + item.latitude + " " + item.longitude );}
    
    else if (item.valeur > 25 && item.valeur < 75){
      var marker = L.marker([item.latitude, item.longitude], {icon: moyenLabubu}).addTo(map);
      marker.bindPopup("<h1>" + item.pays + "</h1>" + item.valeur + "<br>" + item.latitude + " " + item.longitude );}
    
      else {
      var marker = L.marker([item.latitude, item.longitude], {icon: grandLabubu}).addTo(map);
      marker.bindPopup("<h1>" + item.pays + "</h1>" + item.valeur + "<br>" + item.latitude + " " + item.longitude );}
    
    
    })
  });



var petitLabubu = L.icon({
    iconUrl: 'labubu_marker_rouge.png',
    iconSize:     [40, 40], // size of the icon
    iconAnchor:   [26, 40], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -35] // point from which the popup should open relative to the iconAnchor
});

var moyenLabubu = L.icon({
    iconUrl: 'labubu_marker_bleu.png',
    iconSize:     [50, 50], // size of the icon
    iconAnchor:   [26, 40], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -35] // point from which the popup should open relative to the iconAnchor
});

var grandLabubu = L.icon({
    iconUrl: 'labubu_marker_vert.png',
    iconSize:     [60, 60], // size of the icon
    iconAnchor:   [30, 56], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -35] // point from which the popup should open relative to the iconAnchor
});






console.log("test")