var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 34.049890, lng: -6.811560 },
    zoom: 8
  });
}