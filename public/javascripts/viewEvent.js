function viewEventTemplate(event) {
    startDate = event.startDate.replace('T', ' ').replace('Z', '').replace('.000', '')
    endDate = event.endDate.replace('T', ' ').replace('Z', '').replace('.000', '')
    return `<div class="modal">
                <div id="overlay">
                    <div class="modal-container">
                        <div class="close">+</div>
                        <p>Event: "${event.name}"</p>
                        <p>Descriçao: "${event.description}"</p>
                        <p>Inicio: ${startDate} Fim: ${endDate}</p>
                        <div id="mapRoute">
                            <script src="javascripts/viewEvent-map.js"></script>
                        </div>
                    </div>
                </div>
            </div>`
}

function viewEvent(data) {

    eventId = data.id;
    $.ajax({
        url: "api/Events/" + eventId,
        type: "get",
        success: function (result) {
            document.body.innerHTML += viewEventTemplate(result[0]);
            loadMap()
            document.querySelector('.close').addEventListener('click', closeModal);
        }
    })
}

function closeModal() {
    $(".modal").remove()
}

