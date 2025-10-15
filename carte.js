/* PARTIE CARTE */
  var map = L.map('map').setView([48.866667,2.333333], 3.3);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);




fetch('data_pays_labubu.json')
  .then(response => response.json())
  .then(data => {
    data.forEach((item) => {
      var marker = L.marker([item.latitude, item.longitude]).addTo(map); 
      marker.bindPopup("<b>" + item.pays + "</b><br>I am a popup. <br>" + item.latitude + " " +item.longitude).openPopup();
    })
    });

    console.log("test")


