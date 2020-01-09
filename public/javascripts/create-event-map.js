navigator.geolocation.getCurrentPosition(getPosition)
var myLat;
var myLon;
var eventLat;
var eventLon;


function getPosition(position) {
    //L.marker(position.coords.latitude, position.coords.longitude)
    myLat = position.coords.latitude;
    myLon = position.coords.longitude
}


function loadMap() {
    if (myLat != undefined) {
        var map = L.map('map').setView([myLat, myLon], 15);
    } else {
        var map = L.map('map').setView([39.662006523520596, -7.915649414062501], 7);
    }

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoic2sxbm55IiwiYSI6ImNrNG5jMjRuZTA5c3YzcW1oOXRlMHVzcjQifQ.aNa7WEqWXHZkOO-aOst3dg', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox.streets'
    }).addTo(map);
    var geocoder = L.Control.geocoder().addTo(map);
    geocoder._expand()

    var theMarker = {};
    map.on('click', function (e) {
        if (theMarker != undefined) {
            map.removeLayer(theMarker);
        }
        theMarker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map)
        theMarker.bindPopup("This is a marker for your event location. You can remove this marker by clicking on it").openPopup()
        theMarker.on('click', function () {
            map.removeLayer(theMarker)
            document.getElementById('Address').value = ""
        })


        $.ajax({
            url: "https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=" + e.latlng.lat + "&lon=" + e.latlng.lng + "",
            method: "get",
            success: function (result, status) {
                if (result.display_name != undefined) {
                    document.getElementById('Address').value = result.display_name
                    eventLat = e.latlng.lat
                    eventLon = e.latlng.lng

                } else {
                    document.getElementById('Address').value = "Área inacessível. Tente outra localizaçao"
                }
            },
            error: function () {
                console.log("erro");
            }
        })
    });
};

