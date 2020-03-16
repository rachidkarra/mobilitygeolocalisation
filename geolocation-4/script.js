let coordonnes = document.getElementById("coordonnees");
let distance = document.getElementById("distance");
let diametreTerre = 6371;   // en Km

function getDistance() {
    navigator.geolocation.getCurrentPosition(CalculDistance)
}

function deg2rad(deg) {
    return deg * Math.PI / 180
  }


function CalculDistance(position) {
    let [radLatcurrentPos, radLongcurrentPos] = [deg2rad(position.coords.latitude), deg2rad( position.coords.longitude)]
    let [radLatRef, radLongRef] = [deg2rad(34.022766), deg2rad(-6.822644)];

    let distanceLong = (radLongRef - radLongcurrentPos) / 2;
    let distanceLat = (radLatRef - radLatcurrentPos) / 2;

    let a = Math.pow(Math.sin(distanceLat), 2) + Math.pow(Math.sin(distanceLong), 2) * Math.cos(radLatcurrentPos) * Math.cos(radLatRef);
    let d = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    distance.innerHTML = (d * diametreTerre) + " entre les deux places (en km)";
    console.log(diametreTerre * d)
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        coordonnes.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    coordonnes.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
}
