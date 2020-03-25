var map;
var markers = [];

function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 34.049890, lng: -6.811560 },
    zoom: 13
  });

  map.addListener('click', (event) => {
    addMarker(event.latLng);
  })
}

function addMarker(location) {
  let marker = new google.maps.Marker({
    position: location,
    map: map
  });
  markers.push(marker)
}

function setMapOnAll(map){
  for(let i=0; i< markers.length; i++){
    markers[i].setMap(map)
  }
}

function showMarkers(){
  setMapOnAll(map)
}

function clearMarkers(){
  setMapOnAll(null)
}

function deleteMarkers(){
  clearMarkers()
  markers = []
}