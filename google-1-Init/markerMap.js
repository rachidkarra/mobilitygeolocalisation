var map;
function initMap() {
  var estsPosition = { lat: 34.049890, lng: -6.811560 };
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 34.049890, lng: -6.811560 },
    zoom: 13
  });
var marker = new google.maps.Marker({
  position : estsPosition,
  map : map
});
  marker.setMap(map);

  var infowindow = new google.maps.InfoWindow({
    content: "EST de Salé"
  });
  
   marker.addListener('click', function() {
    infowindow.open(map, marker);
  }); 
}