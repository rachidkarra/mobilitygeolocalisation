
function distance(lat1, lon1, lat2, lon2) {
    var R = 6371; // Rayon de la terre en km
    var dLat = deg2rad(lat2 - lat1); // fonction en bas
    var dLon = deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance en km
    console.log(d)
    return d;
  }

  function deg2rad(deg) {
    return deg * Math.PI / 180
  }
  

  // Calcul distance entre EST de Sale et le Tour HASSAN
  distance(34.022766, -6.822644, 34.0686792,  -6.7967522);