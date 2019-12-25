$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

function renderNav() {
    if (checkState() == true) {
        document.getElementsByClassName('navlinks')[0].innerHTML += ' <li><a href="myEvents.html">My Events</a></li>'
        document.getElementsByClassName('navlinks')[0].innerHTML += ' <li><a href="Profile.html">My Profile</a></li>'
        document.getElementsByClassName('navlinks')[0].innerHTML += ' <li><a onClick="signOut()" href="index.html">Sign Out</a></li>'
    } else {
        document.getElementsByClassName('navlinks')[0].innerHTML += ' <li><a href="login.html">Sign In</a></li>'
    }
}
