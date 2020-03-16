let coordonnes = document.getElementById("coordonnees");
var geoLocation = navigator.geolocation;
var watchId;
function getCurrentLocation() {
  if (navigator.geolocation) {
    watchId = geoLocation.watchPosition(showPosition);    //callBack
    console.log('Watching id: '+ watchId);
  } else {
    coordonnes.innerHTML = "Geolocation is not supported by this browser.";
  }
}
function showPosition(position) {
    coordonnes.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}

function StopWatching(){
    geoLocation.clearWatch(watchId);
    console.log('Stopped id: '+ watchId);
}