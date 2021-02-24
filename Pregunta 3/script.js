function processFrom() {
    var namej = document.getElementById("partido").value
    var agej = document.getElementById("NumeroVotos").value
    var hobbyj = document.getElementById("orientacion").value

    var texto = ("Hello I am " + namej + " having " + agej + " years of age and my hobby is " + hobbyj)

    var resultElement = document.getElementById("result")
    resultElement.innerText = texto

}
function agregarFila() {
    document.getElementById("tablaprueba").insertRow(-1).innerHTML = '<td></td><td></td><td></td><td></td>';
}


function sendEmail() {
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var message = document.getElementById("message").value

    alert("De: " + name + " <" + email + "> " + "\n Mensaje: \n " + message)
}

