let coordonnes = document.getElementById("coordonnees");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, errorPosition);
  } else { 
    coordonnes.innerHTML = "Geolocalisation n'est pas supporte dans ce navigateur.";
  }
}

function showPosition(position) {
  alert(position.timestamp);   // new Date(position.timestamp).toLocaleString()
    coordonnes.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}

function errorPosition(error){
  console.log('Error code: '+ error.code + ' Error message: ' + error.message);
}