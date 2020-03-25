// fitBounds pour centrer la map sur l'ensemble des Markers
var map;
var markers = [];
var latLngBounds;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 34.049890, lng: -6.811560 },
    zoom: 13
  });
  setMapOnAll(null);  
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
  setMapOnAll(map)
}

function setMapOnAll(map) {
  latLngBounds = new google.maps.LatLngBounds();
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(map)
    latLngBounds.extend(markers[i].position);
  }
  if (map != null) {
    // fit the map in the case of one Marker
    if (latLngBounds.getNorthEast().equals(latLngBounds.getSouthWest())) {
      var extendPoint1 = new google.maps.LatLng(latLngBounds.getNorthEast().lat() + 0.01, latLngBounds.getNorthEast().lng() + 0.01);
      var extendPoint2 = new google.maps.LatLng(latLngBounds.getNorthEast().lat() - 0.01, latLngBounds.getNorthEast().lng() - 0.01);
      latLngBounds.extend(extendPoint1);
      latLngBounds.extend(extendPoint2);
   }
    map.fitBounds(latLngBounds)
  }
}

function showMarkers() {
  setMapOnAll(map)
}

function clearMarkers() {
  setMapOnAll(null)
}

function deleteMarkers() {
  clearMarkers()
  markers = []
}