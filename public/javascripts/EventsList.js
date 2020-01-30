window.onload = function () {

  renderNav()
  this.loadEvent();
};


function loadEvent() {
  var joinedEvents = [];
  var userId = sessionStorage.getItem("userId")
  var selectedCategory = sessionStorage.getItem("EventCategoryId")

  if (checkState() != true) {
    $.ajax({
      url: "api/Events/Categories/" + selectedCategory,
      type: "GET",
      success: function (result) {
        for (event in result) {
          document.getElementById("cards-wrapper").innerHTML += signedoutTemplate(result[event]);
        }
      }
    });
  } else {
    $.ajax({
      url: "api/Events/Group/" + userId,
      type: "GET",
      success: function (result) {
        for (event in result) {
          joinedEvents.push(result[event].idEvent)
        }
        $.ajax({
          url: "api/Events/Categories/" + selectedCategory,
          type: "GET",
          success: function (result) {
            for (event in result) {
              if (joinedEvents.includes(result[event].id)) {
                document.getElementById("cards-wrapper").innerHTML += joinedEventTemplate(result[event])
              } else {
                document.getElementById("cards-wrapper").innerHTML += cardsWrapperTemplate(result[event]);
              }
            }
          }
        });
      }
    });
  }
}



