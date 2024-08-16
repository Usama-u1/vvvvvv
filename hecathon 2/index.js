var email = document.getElementById('email').value="";
var psw = document.getElementById('psw').value="";

function sendHandle() {
    if (email === '', psw === '') {
        window.location.href = 'signup.html'
    }else{
        window.location.href = 'dashboard.html'
    }
}


