window.onload = function () {
    if (!checkState()) {
        window.location.href = "login.html"
    }
    renderNav()
    this.loadMyCreatedEvents();
};


function loadMyCreatedEvents() {
    var userId = sessionStorage.getItem("userId")
    //var loadedEvents = []
    //var joinedEvents = []
    var haveCreated = false;
    var haveJoined = false;

    /*$.ajax({
        url: "api/Events/Group/" + userId,
        type: "GET",
        success: function (result) {
            if (result.length != 0) {
                for (event in result) {
                    joinedEvents.push(result[event].idEvent)
                }
            } else {
                document.getElementById("joined-events").innerHTML = `<p>You haven't joined any event.</p>`
            }
            $.ajax({
                url: "api/Events/",
                type: "GET",
                success: function (result) {

                    for (event in result) {
                        if (result[event].host == userId) {
                            loadedEvents.push(result[event].id)
                            document.getElementById("cards-wrapper").innerHTML += deleteTemplate(result[event])
                        } else if (joinedEvents.includes(result[event].id) && result[event].host != userId) {
                            document.getElementById("joined-events").innerHTML += joinedEventTemplate(result[event])
                        }
                    }
                    if (loadedEvents.length == 0) {
                        document.getElementById("cards-wrapper").innerHTML = `<p>You have no created events.</p>`
                    }


                }
            });


        }
    });*/
    $.ajax({
        url: "api/Users/" + userId + "/ActiveEventsInfo",
        type: "GET",
        success: function (result) {
            if (result.length == 0) {
                document.getElementById("cards-wrapper").innerHTML = `<p>You have no created events.</p>`
                document.getElementById("joined-events").innerHTML = `<p>You haven't joined any event.</p>`
            } else {
                for (event in result) {
                    if (result[event].host == userId) {
                        document.getElementById("cards-wrapper").innerHTML += deleteTemplate(result[event])
                        haveCreated = true;
                    } else {
                        document.getElementById("joined-events").innerHTML += joinedEventTemplate(result[event])
                        haveJoined = true;
                    }
                }
                if (!haveCreated) {
                    document.getElementById("cards-wrapper").innerHTML = `<p>You have no created events.</p>`
                } else if (!haveJoined) {
                    document.getElementById("joined-events").innerHTML = `<p>You haven't joined any event.</p>`
                }
            }
        }
    });

}

