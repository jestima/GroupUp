document.getElementById("signinLink").addEventListener("click", switchForms)
document.getElementById("signupLink").addEventListener("click", switchForms)

function switchForms() {
    if (document.getElementById("signin").style.display === "none") {
        document.getElementById("signin").style.display = "block"
        document.getElementById("signup").style.display = "none"
    } else {
        document.getElementById("signin").style.display = "none"
        document.getElementById("signup").style.display = "block"
    }
}