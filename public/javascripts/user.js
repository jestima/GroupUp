var isLogged = sessionStorage.getItem("isLogged")
var idUser = sessionStorage.getItem("userId")

function registerUser() {
    var name = document.getElementById("name").value;
    var mail = document.getElementById("email").value;
    var password = document.getElementById("pass").value;
    var repassword = document.getElementById("re_pass").value;

    if (verifyUser(name, mail) == true && verifyPassword(password, repassword)) {
        $.ajax({
            url: "/api/Users/CreateUser",
            method: "post",
            data: {
                name: name,
                mail: mail,
                password: password
            },
            success: function (res, status) {
                alert("Account successfully created!");
                window.location.href = "index.html";
            },
            error: function () { }
        });
    }
}


function verifyPassword(pass, repass) {
    if (pass != "" && pass == repass) {
        return true;
    } else {
        alert("Passwords don't match. Please retype them.");
        return false;
    }
}

function verifyUser(username, mail) {
    if (username != "" && mail != "") {
        if (mail.includes("@")) {
            return true;
        } else {
            alert("Invalid email");
            return false;
        }
    } else {
        alert("Invalid username/email. Please retype them.");
        return false;
    }
}


function login() {
    var mail = document.getElementById("your_name").value;
    var password = document.getElementById("your_pass").value;

    $.ajax({
        url: "/api/Users",
        method: "post",
        data: {
            mail: mail,
            password: password
        },
        success: function (result) {
            if (result != 0) {
                alert("Successfully signed in. Welcome " + result[0].name)
                window.location = "index.html"
                sessionStorage.setItem("userId", result[0].id)
                sessionStorage.setItem("isLogged", "true")
            } else {
                alert("Incorrect username/password.")
            }
        },
        error: function () { }
    });
}



function signOut() {
    sessionStorage.setItem("isLogged", "false")
    sessionStorage.setItem("userId", null)
    alert("Successfully signed out.")
}


function checkState() {
    if (isLogged == "true") {
        return true
    } else {
        return false
    }
}




