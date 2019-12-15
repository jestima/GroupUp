function joinEvent(data) {
    id = data.id
    idEvent = id.replace("joinEvent", "")
    idUser = sessionStorage.getItem("userId")
    $.ajax({
        url: "/api/Events/Group/Join",
        method: "post",
        data: {
            idEvent: idEvent,
            idUser: idUser
        },
        success: function (res, status) {
            alert("Successfully joined the event!")
            window.location.href = "Events.html"
        },
        error: function () {

        }
    });
}

function leaveEvent(data) {
    id = data.id
    idEvent = id.replace("leaveEvent", "")
    idUser = sessionStorage.getItem("userId")
    $.ajax({
        url: "/api/Events/Group/Leave",
        method: "post",
        data: {
            idEvent: idEvent,
            idUser: idUser
        },
        success: function (res, status) {
            alert("Successfully left the event!")
            window.location.href = "Events.html"
        },
        error: function () {

        }
    });
}