var newEvent = 
{
    Title:"",
    Description: "",
    EventType: "",
    StartDate: "",
    EndDate: "",
    Host: "",
    Location: ""
}

document.getElementById('submitbtn').addEventListener('click',function(){
    newEvent.EventType = document.getElementById("eventTps").value;
    newEvent.Title = document.getElementById("eventTitle").value;
    newEvent.Description = document.getElementById("eventDesc").value;
    newEvent.StartDate = document.getElementById("eventSDate").value;
    newEvent.EndDate = document.getElementById("eventEDate").value;
    newEvent.Location = document.getElementById("eLoc").value;

    var JSONString = JSON.stringify(newEvent);

    var JSONRequest = new XMLHttpRequest();
    JSONRequest.open("POST", "./Modules/EventsData.json");
    var JSONParse = JSON.parse(JSONString);
    JSONRequest.setRequestHeader("Content-Type", "application/json");
    JSONRequest.send(JSONString);
});