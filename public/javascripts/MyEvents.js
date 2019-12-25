window.onload = function () {
    renderNav()
    this.loadMyCreatedEvents();
};


function loadMyCreatedEvents() {
    var userId = sessionStorage.getItem("userId")
    var loadedEvents = []
    var joinedEvents = []

    $.ajax({
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
                        } else {

                            document.getElementById("joined-events").innerHTML = `<p>You haven't joined any event.</p>`
                        }
                    }
                    if (loadedEvents.length == 0) {
                        document.getElementById("cards-wrapper").innerHTML = `<p>You have no created events.</p>`
                    }


                }
            });


        }
    });
}

