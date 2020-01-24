window.onload = function () {
    if(!checkState()){
        window.location.href = "login.html"
      }
    renderNav()
    this.loadCategories()
    this.loadPInfo()
    this.linkDiscord()

};

function loadCategories() {
    var categoriesOptions = document.getElementById("prefForm");
    var userId = sessionStorage.getItem("userId")
    var userPrefs = []
    $.ajax({
        url: "api/Users/" + userId + "/Preferences",
        method: "get",
        success: function (result, status) {
            for (i in result) {
                userPrefs.push(result[i].idCat)
            }
            $.ajax({
                url: "api/Events/Categories",
                method: "get",
                success: function (result, status) {
                    for (i in result) {
                        if (userPrefs.includes(result[i].id)) {
                            var option = document.createElement('input')
                            option.type = "checkbox"
                            option.id = result[i].id
                            option.value = result[i].name
                            option.checked = "true"
                            var label = document.createElement('label')
                            label.for = result[i].id
                            label.innerHTML = result[i].name
                            categoriesOptions.appendChild(option)
                            categoriesOptions.appendChild(label)
                        } else {
                            var option = document.createElement('input')
                            option.type = "checkbox"
                            option.id = result[i].id
                            option.value = result[i].name
                            var label = document.createElement('label')
                            label.for = result[i].id
                            label.innerHTML = result[i].name
                            categoriesOptions.appendChild(option)
                            categoriesOptions.appendChild(label)
                        }
                    }
                },
                error: function () {
                    console.log("erro");
                }
            })

        },
        error: function () {
            console.log("erro");
        }
    })

}

function loadPInfo() {
    var idUser = sessionStorage.getItem("userId")
    $.ajax({
        url: "api/Users/" + idUser,
        type: "get",
        success: function (result) {
            document.getElementById('Profile-username').innerHTML = `${result[0].name}`
            document.getElementById('Profile-email').innerHTML = `${result[0].mail}`
            if (result[0].latlon == null) {
                document.getElementById('Profile-location').innerHTML = `Access to location denied. <button id=giveLocationbtn onclick="giveLocation()">Give my location</button>`
            } else {
                $.ajax({
                    url: "https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=" + result[0].latlon.x + "&lon=" + result[0].latlon.y + "",
                    method: "get",
                    success: function (result, status) {
                        document.getElementById('Profile-location').innerHTML = `${result.display_name} <button id=giveLocationbtn onclick="giveLocation()">Update my location</button>`
                    },
                    error: function () {
                        console.log("erro");
                    }
                })
                document.getElementById('Profile-location').innerHTML = ``
            }
        }
    })
}

function updatePref() {
    var idUser = sessionStorage.getItem("userId")
    var idCat = ""
    var checkboxes = document.getElementsByTagName('input')
    for (i in checkboxes) {
        if (checkboxes[i].checked) {
            idCat += checkboxes[i].id + " "
        }
    }
    /*$.ajax({
        url: "/api/Users/User/Preferences/Reset",
        method: "post",
        data: {
            idUser: idUser
        },
        success: function (res, status) {*/
    $.ajax({
        url: "/api/Users/User/Preferences",
        method: "post",
        data: {
            idUser: idUser,
            idCat: idCat,
        },
        success: function (res, status) {
            alert("Preferences updated!")
            location = location
        },
        error: function () {

        }
    });
    /* },
     error: function () {

     }
 });*/

}

function giveLocation() {
    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };
    function success(pos) {
        var crd = pos.coords;
        saveLat = crd.latitude
        saveLon = crd.longitude
        geocode(saveLat, saveLon)
    }
    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);


}

function geocode(lat, lon) {
    $.ajax({
        url: "https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=" + lat + "&lon=" + lon + "",
        method: "get",
        success: function (result, status) {
            if (result.display_name != undefined) {
                var distrito = "distrito"
                var distritos = ['Lisboa', 'Porto', 'Viana do Castelo', 'Braga', 'Vila Real', 'Bragança', 'Aveiro', 'Viseu', 'Guarda', 'Coimbra', 'Castelo Branco', 'Leiria', 'Santarém', 'Portalegre', 'Setúbal', 'Évora', 'Beja', 'Faro']
                for (i in distritos) {
                    if (result.display_name.includes(distritos[i])) {
                        distrito = distritos[i]
                        break
                    }
                }
                saveLocation(lat, lon, distrito)
            } else {
                alert("Your location appears to be undefined. Please try again later.")
            }
        },
        error: function () {
            console.log("erro");
        }
    })
}

function saveLocation(lat, lon, distrito) {
    var idUser = sessionStorage.getItem("userId")

    $.ajax({
        url: "/api/Users/User/latlon",
        method: "put",
        data: {
            idUser: idUser,
            lat: lat,
            lon: lon,
            distrito: distrito
        },
        success: function (res, status) {
            alert("Successfully saved your location.")
            location = location
        },
        error: function () {

        }
    });
}

function linkDiscord() {
    if (window.location.href.indexOf("code=") > -1) {
        var code = window.location.href.substring(window.location.href.indexOf("="))
        code = code.substring(1)
        const redirect = 'https://group-up-app.herokuapp.com/Profile.html'
        var token = ""
        var discId = ""
        var userId = sessionStorage.getItem("userId")
        $.ajax({
            url: `https://discordapp.com/api/oauth2/token`,
            type: "post",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: {
                'client_id': 660148456614264834,
                'client_secret': jT8iXtixMzCPyWHpfIfetHVDv7Nvdjrs,
                'grant_type': 'authorization_code',
                'code': code,
                'redirect_uri': redirect,
                'scope': 'identify'
            },

            success: function (result) {
                token = result.access_token
                $.ajax({
                    url: "https://discordapp.com/api/users/@me",
                    type: "get",
                    headers: {
                        'Authorization': 'Bearer ' + token
                    },
                    success: function (result) {
                        discId = result.id
                        $.ajax({
                            url: "api/Users/User/Discord",
                            type: "post",
                            data: {
                                discId: discId,
                                userId: userId
                            },
                            success: function (result) {
                                alert("Successfully linked with Discord. If you are already on our Discord server you can go to 'My Events' and click 'Get Discord Roles' button.")
                            }
                        })
                    }
                })
            }
        })

    }
}
