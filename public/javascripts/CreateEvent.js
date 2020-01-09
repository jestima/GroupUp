function loadCategoriesOptions() {
    var categoriesOptions = document.getElementById("eventCategories");
    $.ajax({
        url: "api/Events/Categories",
        method: "get",
        success: function (result, status) {
            for (i in result) {
                var option = document.createElement('option')
                option.id = result[i].id
                option.innerHTML = result[i].name
                categoriesOptions.appendChild(option)
            }

        },
        error: function () {
            console.log("erro");
        }
    })
}
function formTemplate() {
    return `
    <div class="containerCreateEvent">
    <form id="contact" method="post">
        <div id="CreateEventbtn">
            <h3>Create Events</h3>
            <h3><button onclick="enableScroll()">+</button></h3>
        </div>
        <fieldset>
            <select id="eventSchedule">
                <option id="Routine">Routine</option>
                <option id="One Time">One Time</option>
                <option id="Workshop">Workshop</option>
            </select>
        </fieldset>
        <fieldset>
            <input placeholder="Event Name" id="Name" type="text" required autofocus>
        </fieldset>
        <fieldset>
            <input placeholder="Description" id="Description" type="text" required>
        </fieldset>
        <fieldset>
            <select id="eventCategories" onchange="getClickedOptionCategory(this)">

            </select>
        </fieldset>
        <p>Start Date: <input type="text" id="startdatepicker" autocomplete="off"></p>
        <p>Hora de inicio</p><input id ="starttime" type="time" min="00:00" max="23:59" pattern="[0-23]{2}:[0-59]{2}">
        <p>End Date: <input type="text" id="enddatepicker" autocomplete="off"></p>
        <p>Hora de fim</p><input id="endtime" type="time" min="00:00" max="23:59" pattern="[0-23]{2}:[0-59]{2}">
        <fieldset>
            <input placeholder="Click on the map to enter your event's location." id="Address" type="address"
                tabindex="2" required readonly="readonly">
            <div id="map">
                <script src="javascripts/create-event-map.js"></script>
            </div>
        </fieldset>
        <fieldset>
            <button name="submit" type="button" id="contact-submit">Submit</button>
        </fieldset>
    </form>
</div>`
}

function showCreateEvent() {

    document.getElementById('CreateEvent').innerHTML = formTemplate()
    loadCategoriesOptions()
    document.getElementById('contact-submit').addEventListener('click', createEvent)
    document.getElementById('CreateEvent').style.display = "block";
    sessionStorage.setItem("OptionCategoryId", 1)
    $(function () {
        $('#startdatepicker').datepicker({
            minDate: 0,
            maxDate: +30,

            beforeShow: function () {
                setTimeout(function () {
                    $('.ui-datepicker').css('z-index', 1000);
                }, 0);
            }
        });

        $('#enddatepicker').datepicker({
            minDate: 0,
            maxDate: +60,

            beforeShow: function () {
                setTimeout(function () {
                    $('.ui-datepicker').css('z-index', 1000);
                }, 0);
            }
        });
    });
    loadMap()
    window.scrollTo(0, document.body.scrollHeight);
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

        // if any scroll is attempted, set this to the previous value 
        window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
        };
}


function fixZIndex() {
    document.getElementById("ui-datepicker-div").style.zIndex = 1000;
    document.getElementById('startdatepicker').style.color = "black";
    document.getElementById('enddatepicker').style.color = "black";

}

function verifyDates(startDate, endDate) {
    if (startDate == "" || endDate == "") {
        alert("You must introduce a valid date.")
        return false
    }
    var sD = new Date(startDate)
    var eD = new Date(endDate)

    if (sD.getTime() > eD.getTime()) {
        alert("End date can't be sooner than start date. Please introduce a valid date.")
        document.getElementById('startdatepicker').style.color = "#ff0000";
        document.getElementById('enddatepicker').style.color = "#ff0000";
        return false
    } else {
        return true
    }
}


function verifyTextboxes(name, description) {
    if (name != "" && description != "") {
        return true
    } else {
        alert("Oops, something went wrong. Please make sure you've properly filled event name and description")
        return false
    }
}

function verifyCoordinates(lat, lon) {
    if (lat != undefined && lon != undefined) {
        return true
    } else {
        alert("You must choose an event location.")
        return false
    }
}

function getClickedOptionCategory(Data) {
    sessionStorage.setItem("OptionCategoryId", Data[Data.selectedIndex].id);
}
function renderCreate() {
    if (checkState() == true) {
        document.getElementById('box').innerHTML = '<a href="#CreateEvent" class="btn btn-white btn-animation-1" id="btnid">Create an event!</a>'
        document.getElementById("btnid").addEventListener('click', showCreateEvent)
        document.getElementById('box').style.display = "flex"
    }
}

function createEvent() {
    var startDate = document.getElementById('startdatepicker').value;
    var endDate = document.getElementById('enddatepicker').value;

    var startTime = document.getElementById('starttime').value
    var endTime = document.getElementById('endtime').value

    var eventName = document.getElementById('Name').value;
    var eventDescription = document.getElementById('Description').value;

    var eventCategory = sessionStorage.getItem("OptionCategoryId")

    var host = sessionStorage.getItem("userId");


    if (verifyTextboxes(eventName, eventDescription) == true && verifyDates(startDate, endDate) == true && verifyCoordinates(eventLat, eventLon) && startTime != "" && endTime != "") {
        var sD = new Date(startDate)
        var eD = new Date(endDate)
        var sDate = sD.getFullYear() + "-" + (sD.getMonth() + 1) + "-" + sD.getDate()
        var eDate = eD.getFullYear() + "-" + (eD.getMonth() + 1) + "-" + eD.getDate()
        $.ajax({
            url: "/api/Discord/CreateChannel",
            type: "post",
            data: {
                eventName: eventName
            },
            success: function (result) {
                console.log(result)
            },
            error: function (result) {
                console.log(result)
            }
        })
        $.ajax({
            url: "/api/Events/Create",
            method: "post",
            data: {
                eventCategory: eventCategory,
                startDate: sDate,
                endDate: eDate,
                eventName: eventName,
                eventDescription: eventDescription,
                eventLat: eventLat,
                eventLon: eventLon,
                host: host,
                startTime: startTime,
                endTime: endTime
            },
            success: function (res, status) {




                alert("Event successfully created!")
                window.location.href = "index.html"

            },
            error: function () {

            }
        });

    }

}
function enableScroll() {
    window.onscroll = function () {
    };
    $("#CreateEvent").empty()
} 
