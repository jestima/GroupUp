function dLink() {
    location.href = "https://discordapp.com/api/oauth2/authorize?client_id=660148456614264834&redirect_uri=https%3A%2F%2Fgroup-up-app.herokuapp.com%2FProfile.html&response_type=code&scope=identify"
}

function getDiscRoles() {
    var userId = sessionStorage.getItem("userId")
    var joinedEvents = []
    var joinedEventsNames = [];
    var discId;
    $.ajax({
        url: "api/Events/Group/" + userId,
        type: "GET",
        success: function (result) {
            if (result.length != 0) {
                for (event in result) {
                    joinedEvents.push(result[event].idEvent)
                }
            } else {
                alert("You haven't joined any event!")
                return
            }
            $.ajax({
                url: "api/Events/",
                type: "GET",
                success: function (result) {
                    for (event in result) {
                        if (joinedEvents.includes(result[event].id)) {
                            joinedEventsNames.push(result[event].name)
                        }
                    }

                    $.ajax({
                        url: "api/Users/" + userId,
                        type: "GET",
                        success: function (result) {
                            discId = result[0].discId
                            if (result[0].discId != null) {
                                $.ajax({
                                    url: "api/Discord/GiveRoles",
                                    type: "POST",
                                    traditional: true,
                                    data: {
                                        discId: discId,
                                        joinedEventsNames: joinedEventsNames
                                    },
                                    success: function (result) {
                                        alert("Successfully assigned your roles at our Discord Server! Enjoy.")
                                    }
                                });
                            } else {
                                alert("You haven't linked your discord yet!")
                            }

                        }
                    });
                }
            });


        }
    });
}