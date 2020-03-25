var map;
function initMap() {
  var estsPosition = { lat: 34.049890, lng: -6.811560 };
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 34.0500238, lng: -6.8148881 },
    zoom: 13
  });
var marker = new google.maps.Marker({
  position : estsPosition,
  map : map,
  title : "Click ici zoom"
});
  map.addListener('zoom_changed',()=> {
    window.setTimeout(() => {
      map.panTo(marker.getPosition());  // retourne vers la position du marker
    },3000);
  });

  marker.addListener('click', () => {
    console.log(map.getProperty());
    map.setZoom(8);
    map.setCenter(marker.getPosition())
  })

}