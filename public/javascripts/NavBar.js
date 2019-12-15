$('.navTrigger').click(function() {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

function renderNav(){
    if(checkState() == true){
        document.getElementById('navsign').innerHTML = '<a onClick="signOut()" href="index.html">Sign out</a>'
    }else{
        document.getElementById('navsign').innerHTML = '<a href="login.html">Sign in</a>'
    }
}
