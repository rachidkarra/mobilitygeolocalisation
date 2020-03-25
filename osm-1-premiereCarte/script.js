//Est de Salé lat : 34.049826,  long : -6.813009, 15z
let mymap = L.map('mapid').setView([34.0500238, -6.8148934], 18);
L.tileLayer('//{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Code © <a href="https://leafletjs.com//">Leaflet.js</a>',
    maxZoom: 18,
}).addTo(mymap);
console.log(mymap);

let popup = L.popup()
    .setLatLng([34.0500238, -6.8148934])
    .setContent("Oops, à côté de Ests")
    .openOn(mymap);

function onMapClick(e) {
    alert("Vous êtes aux coordonnées " + e.latlng);
}


mymap.on('click', onMapClick);