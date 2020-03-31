
//Est sale lat : 34.049826,  long : -6.813009, 15z
//page de saisie des emplacement favoris
if (document.getElementById('mapid') != null) {
    let mymap = L.map('mapid').setView([34.049826, -6.813009], 18);
    L.tileLayer('//{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Code © <a href="https://leafletjs.com//">Leaflet.js</a>',
        maxZoom: 18,
    }).addTo(mymap);

    let popup = L.popup()
        .setLatLng([34.049826, -6.813009])
        .setContent("Est de Salé")
        .openOn(mymap);

    function onMapClick(e) {
        document.getElementById('latlng').value = [e.latlng.lat.toFixed(6), e.latlng.lng.toFixed(6)];
        alert("Vous êtes aux coordonnées " + e.latlng);
    }

    mymap.on('click', onMapClick);
}

///// Page des emplacements Favoris
if (document.getElementById('loadmap') != null) {

    let loadmap = L.map('loadmap').setView([34.049826, -6.813009], 18);
    L.tileLayer('//{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Code © <a href="https://leafletjs.com//">Leaflet.js</a>',
        maxZoom: 18,
    }).addTo(loadmap);

    getData();

    async function getData() {
        try {
            const res = await fetch('/getData');
            const data = await res.json();
            for (var key in data) {
                if (data.hasOwnProperty(key)) {
                    console.log(key + " -> " + data[key].latlng[0]);
                    const marker = L.marker([data[key].latlng[0], data[key].latlng[1]]).addTo(loadmap);
                    marker.bindPopup(data[key].nom)
                }
            }
        } catch (error) {
            console.log(error)
        }

    }



}