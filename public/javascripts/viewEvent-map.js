
var myLat;
var myLon;
var eventLat;
var eventLon;
var map

function getPosition(position) {
    myLat = position.coords.latitude;
    myLon = position.coords.longitude
}


function loadMap() {
    if (myLat != undefined) {
        map = L.map('mapRoute').setView([myLat, myLon], 15);
    } else {
        map = L.map('mapRoute').setView([39.662006523520596, -7.915649414062501], 7);
    }

    L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    var geocoder = L.Control.geocoder().addTo(map);
    geocoder._expand()


    showRoute()
}

function showRoute() {
    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };
    function success(pos) {
        var crd = pos.coords;
        myLat = crd.latitude
        myLon = crd.longitude
    }
    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
    $.ajax({
        url: "api/Events/" + eventId + "/Location",
        type: "get",
        success: function (result) {
            var waypoints = [L.latLng(myLat, myLon),L.latLng(result[0].lat, result[0].lon)];
            control = L.Routing.control({
                routeWhileDragging: true,
                waypoints: waypoints,
                geocoder: L.Control.Geocoder.nominatim()
            }).addTo(map);

            document.querySelector('.leaflet-routing-geocoders').style.display = "none"
            document.querySelector('.leaflet-control-geocoder').style.display = "none"
        }
    })





}

