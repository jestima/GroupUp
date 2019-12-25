window.onload = function () {
    this.loadPage()
    renderNav()
    this.renderCreate()
    getEventCategories()
    
};
function loadPage(){
    document.body.innerHTML = loadPageTemplate()
}

function loadPageTemplate(){
    return ` <nav class="nav">
    <div class="container">
        <div class="logo">
            <a href="index.html">Group Up</a>
        </div>
        <div id="mainListDiv" class="main_list">
            <ul class="navlinks">

                <li><a href="#EventTypesInfoSection">Event Types</a></li>
                <li><a href="#EventTypes">Event Categories</a></li>
                <li><a href="#AboutUs">About Us</a></li>
                <li><a href="#Contact">Contact</a></li>

            </ul>
        </div>
        <span class="navTrigger">
            <i></i>
            <i></i>
            <i></i>
        </span>
    </div>
</nav>

<header>
    <img src="/images/Header.jpg" alt="">
</header>

<section id="EventTypesInfoSection">
    <h1>Our types of events</h1>
    <div id="EventTypesInfo">
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <img
                        src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true" />
                    <h3>One-Time</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>
                        Events that occur once and are disabled
                    </p>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <img
                        src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true" />
                    <h3>Routines</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>
                        Events that occur on a schedule
                    </p>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <img
                        src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/launch_128.png?raw=true" />
                    <h3>Workshops</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>
                        Events that are professional or semi-professional and are paid
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>

<div id="box" class="box"></div>



<section id="EventTypes">
    <div class="SEWrapper" id="SEWrapper">
        <h1>Search Events</h1>
        <div class="SECols" id="SECols"></div>
    </div>
</section>

<section id="AboutUs">
    <h1>About Us</h1>
    <p>
        Social media is increasing exponentially in the lives of children, teenagers and adults. It allows family
        and friends to stay connected through the internet without the need to physically move to each other.
        Because of this ease of access, social media
        has been growing immensely in popularity and doesn't seem to be stopping any time soon. To accommodate this
        rising number of users many companies are creating more platforms, each with their own creative twist.
    </p>
    <p>
        In this project we intend to create a platform for hobbyists to come together, share or learn more about
        their hobbies, whatever they may be. One example of this type of platform is meetup​. On this website you
        can create events for people to sign up
        and meet.
    </p>
    <p>
        We believe we could bring people closer together by giving them a way of joining or hosting an event with
        other people and ultimately enjoy their hobby to the fullest, all the while in the presence of other like
        minded people.
    </p>
</section>

<footer id="ContactFooter">
    <h1>
        Contacts
    </h1>
    <p>This project was created by Manuel Beijinho and Bruno Ramos</p>
    <p>Universidade Europeia | Iade | 2019</p>
</footer>
<section id="CreateEvent"></section>

`
}
function getClickedEventCategory(Data) {
    sessionStorage.setItem("EventCategoryId", Data.id);
    location.href = "Events.html";
}

function getEventCategories() {
    $.ajax({
        url: "api/Events/Categories",
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

