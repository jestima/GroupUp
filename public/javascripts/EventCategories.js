

window.onload = function () {
    this.loadPage()
    renderNav()
    this.renderCreate()
    getEventCategories()


};
function loadPage() {
    document.getElementById('navbar').innerHTML += loadPageTemplate()

}


function loadPageTemplate() {
    return ` 
    <div class="container">
        <div class="logo">
            <a href="index.html">Group Up</a>
        </div>
        <div id="mainListDiv" class="main_list">
            <ul class="navlinks">

                <li><a href="#EventTypesInfoSection">Event Types</a></li>
                <li><a href="#EventTypes">Event Categories</a></li>
                <li><a href="#AboutUs">About Us</a></li>
                <li><a href="#ContactFooter">Contact</a></li>

            </ul>
        </div>
        <span class="navTrigger">
            <i></i>
            <i></i>
            <i></i>
        </span>
    </div>


`
}
function getClickedEventCategory(Data) {
    sessionStorage.setItem("EventCategoryId", Data.id);
    location.href = "Events.html";
}

function getEventCategories() {
    $.ajax({
        url: "/api/Events/Categories",
        type: "get",
        success: function (result) {
            for (event in result)
                document.getElementById("SECols").innerHTML += EventCategoriesTemplate(result[event]);
        }
    })
}

function EventCategoriesTemplate(data) {
    return `
  <div id="${data.id}" class="SECol" onClick="getClickedEventCategory(this)">
      <div id="SEContainer${data.name}" class="SEContainer">
          <div id="SEFront${data.name}" class="SEFront" style="background-image: url(${data.image})">
              <div id="SEInner${data.name}" class="SEInner">
                  <p>${data.name}</p>
              </div>
          </div>

          <div id="SEBack${data.name}" class="SEBack">
              <p>${data.description}</p
          </div>
      </div>
  </div>
  `
}

