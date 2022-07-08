var attempt = 3;
function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "Rodo" && password == "123"){
        window.location.href = "../talleres.html";
        return false;
    }
    else{
        attempt --;// Decrementing by one.
        alert("Te quedan "+attempt+" intentos;");
// Disabling fields after 3 attempts.
        if( attempt == 0){
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}