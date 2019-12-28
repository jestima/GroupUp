
var myLat;
var myLon;
var eventLat;
var eventLon;
var map


function loadMap() {
    if (myLat != undefined) {
        map = L.map('mapRoute').setView([myLat, myLon], 15);
    } else {
        map = L.map('mapRoute').setView([39.662006523520596, -7.915649414062501], 7);
    }

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoic2sxbm55IiwiYSI6ImNrNG5jMjRuZTA5c3YzcW1oOXRlMHVzcjQifQ.aNa7WEqWXHZkOO-aOst3dg', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox.streets'
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
            var waypoints = [L.latLng(myLat, myLon), L.latLng(result[0].lat, result[0].lon)];
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

