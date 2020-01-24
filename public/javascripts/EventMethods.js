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
        method: "delete",
        data: {
            idEvent: idEvent,
            idUser: idUser
        },
        success: function (res, status) {
            alert("Successfully left the event!")
            location = location
        },
        error: function () {

        }
    });
}

function deleteEvent(data) {
    id = data.id
    idEvent = id.replace("deleteEvent", "")
    var cPopup = confirm("You want to delete this event! Are you sure?")
    if (cPopup == true) {
        /* $.ajax({
             url: "/api/Events/DeleteGroup",
             method: "post",
             data: {
                 idEvent: idEvent,
             },
             success: function (res, status) {*/
        $.ajax({
            url: "/api/Events/Delete",
            method: "delete",
            data: {
                idEvent: idEvent,
            },
            success: function (res, status) {
                alert("Successfully deleted the event!")
                location = location
            },
            error: function () {

            }
        });
        /*  },
          error: function () {

          }
      });*/

    } else {

    }

}

function updateExpired() {
    $.ajax({
        url: "/api/Events/Event/Expired",
        method: "put",
        data:{},
        success: function (res, status) {
            alert("Successfully updated the events.")
        },
        error: function () {

        }
    });
}


function cardsWrapperTemplate(event) {
    return `
        <div class="card-grid-space">
            <a class="card1" id="${event.id}" style="--bg-img: url(https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://codetheweb.blog/assets/img/posts/html-syntax/cover.jpg)">
                <div>
                    <button name="joinbtn" type="button" id="joinEvent${event.id}" onClick="joinEvent(this)">Join Event</button>
                    <h1>${event.name}</h1>
                    <p>${event.description}</p>
                    <button name="vieweventbtn" type="button" id="${event.id}" onClick="viewEvent(this)">View Event</button>
                    <div class="date">6 Oct 2019</div>
                    <div class="tags">
                        <div class="tag">Routine</div>
                    </div>
                </div>
            </a>
        </div>    
        `;
}

function joinedEventTemplate(event) {
    return `
        <div class="card-grid-space">
            <a class="card1" id="${event.id}" style="--bg-img: url(https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://codetheweb.blog/assets/img/posts/html-syntax/cover.jpg)">
                <div>
                    <button name="leavebtn" type="button" id="leaveEvent${event.id}" onClick="leaveEvent(this)">Leave Event</button>
                    <h1>${event.name}</h1>
                    <p>${event.description}</p>
                    <button name="vieweventbtn" type="button" id="${event.id}" onClick="viewEvent(this)">View Event</button>
                    <div class="date">6 Oct 2019</div>
                    <div class="tags">
                        <div class="tag">Routine</div>
                    </div>
                </div>
            </a>
        </div>    
        `;
}

function signedoutTemplate(event) {
    return `
        <div class="card-grid-space">
            <a class="card1" id="${event.id}" style="--bg-img: url(https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://codetheweb.blog/assets/img/posts/html-syntax/cover.jpg)">
                <div>
                    <h1>${event.name}</h1>
                    <p>${event.description}</p>
                    <button name="vieweventbtn" type="button" id="${event.id}" onClick="viewEvent(this)">View Event</button>
                    <div class="date">6 Oct 2019</div>
                    <div class="tags">
                        <div class="tag">Routine</div>
                    </div>
                </div>
            </a>
        </div>    
        `;
}

function deleteTemplate(event) {
    return `
        <div class="card-grid-space">
            <a class="card1" id="${event.id}" style="--bg-img: url(https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://codetheweb.blog/assets/img/posts/html-syntax/cover.jpg)">
                <div>
                    <button name="deletebtn" type="button" id="deleteEvent${event.id}" onClick="deleteEvent(this)">Delete Event</button>
                    <h1>${event.name}</h1>
                    <p>${event.description}</p>
                    <button name="vieweventbtn" type="button" id="${event.id}" onClick="viewEvent(this)">View Event</button>
                    <div class="date">6 Oct 2019</div>
                    <div class="tags">
                        <div class="tag">Routine</div>
                    </div>
                </div>
            </a>
        </div>    
        `;
}