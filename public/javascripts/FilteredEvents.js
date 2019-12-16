window.onload = function () {
  renderNav()
  this.loadEvent();
};

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



function loadEvent() {
  var joinedEvents = [];
  var userId = sessionStorage.getItem("userId")
  var selectedCategory = sessionStorage.getItem("EventCategoryId")
 
  

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
            }else if(checkState() != true) {
              document.getElementById("cards-wrapper").innerHTML += signedoutTemplate(result[event]);
            }else{
              document.getElementById("cards-wrapper").innerHTML += cardsWrapperTemplate(result[event]);
            }

          }

        }
      });
    }
  });


}



