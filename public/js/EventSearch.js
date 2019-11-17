var JSONRequest = new XMLHttpRequest();
JSONRequest.open('GET','./Modules/EventTypesData.json');
JSONRequest.onload = function() {
    var data = JSON.parse(JSONRequest.responseText);
    PopulateEventSearch(data);
};
JSONRequest.send();

function PopulateEventSearch(data) {

    for (x in data) {

        var EventTypeTitle = document.createElement('p');
        var EventTypeDescription = document.createElement('p');

        EventTypeTitle.innerHTML = data[x].Name;
        EventTypeDescription.innerHTML = data[x].Description;

        var SECol = document.createElement('div');
        SECol.className = "SECol";
        SECol.id = "SECol" + data[x].Name;

        var SEContainer = document.createElement('div');
        SEContainer.className = "SEContainer";
        SEContainer.id = "SEContainer" + data[x].Name;

        var SEFront = document.createElement('div');
        SEFront.className = "SEFront";
        SEFront.id = "SEFront" + data[x].Name;
        SEFront.style.backgroundImage = "url("+data[x].Picture+")";

        var SEInner = document.createElement('div');
        SEInner.className = "SEInner";
        SEInner.id = "SEInner" + data[x].Name;

        var SEInner2 = document.createElement('div');
        SEInner2.className = "SEInner";
        SEInner2.id = "SEInner2" + data[x].Name;

        var SEBack = document.createElement('div');
        SEBack.className = "SEBack";
        SEBack.id = "SEBack" + data[x].Name;

        document.getElementById('SECols').appendChild(SECol);
        document.getElementById('SECol' + data[x].Name).appendChild(SEContainer);
        document.getElementById('SEContainer' + data[x].Name).appendChild(SEFront);
        document.getElementById('SEFront' + data[x].Name).appendChild(SEInner);
        document.getElementById('SEInner' + data[x].Name).appendChild(EventTypeTitle);
        document.getElementById('SEContainer' + data[x].Name).appendChild(SEBack);
        document.getElementById('SEBack' + data[x].Name).appendChild(EventTypeDescription);

        document.getElementById('SEContainer' + data[x].Name).addEventListener('click',function(){
            window.location = "eventlist.html"
        });
    }

}

