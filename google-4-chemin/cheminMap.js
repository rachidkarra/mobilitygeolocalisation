var map;
var markers = [];


function initMap() {
   directionsService = new google.maps.DirectionsService();
  var directionsRenderer = new google.maps.DirectionsRenderer();

  var mapOptions = {
    zoom:7,
    center: rabat
  }
  map = new google.maps.Map(document.getElementById('map'), mapOptions);
  directionsRenderer.setMap(map);
}

function calculateAndDisplayRoute() {
  var fatteh = new google.maps.LatLng(37.7699298, -122.4469157);
  var takadom = new google.maps.LatLng(37.7683909618184, -122.51089453697205);

  var request = {
      origin: fatteh,
      destination: takadom,
      travelMode: 'DRIVING'
  };
  directionsService.route(request, function(response, status) {
    if (status == 'OK') {
      directionsRenderer.setDirections(response);
    }
  });
}
