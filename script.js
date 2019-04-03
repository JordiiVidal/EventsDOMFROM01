function start() {
    var inputName = document.forms["form-user"]["name"];
    inputName.addEventListener("keypress", checkName, false);
    var inputEmail = document.forms["form-user"]["email"];
    inputEmail.addEventListener("keypress", checkEmail, false);
    var inputPassword = document.forms["form-user"]["password"];
    inputPassword.addEventListener("keypress", checkPswd, false);
    var inputPassword2 = document.forms["form-user"]["password2"];
    inputPassword2.addEventListener("keypress", checkPswd2, false);
}
function checkName(event) {
    var inputName = event.target;
    checkNameForm(inputName);
}
function checkNameForm(inputName) {
    if (inputName.value.match(/^[A-z]{3,15}$/)) {
        trueElement('true-name', 'false-name');
        return true;
    }
    else {
        falseElement('true-name', 'false-name');
        return false;
    }
}
function checkEmail(event) {
    var inputEmail = event.target;
    checkEmailForm(inputEmail);
}
function checkEmailForm(inputEmail) {
    var validate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (validate.test(String(inputEmail.value).toLowerCase())) {
        trueElement('true-email', 'false-email');
        return true;
    }
    else {
        falseElement('true-email', 'false-email');
        return false;
    }
}
function checkPswd(event) {
    var inputPswd = event.target;
    checkPswdForm(inputPswd);
}
function checkPswdForm(inputPswd) {
    if (inputPswd.value.length < 4 || inputPswd.value.length > 10) {
        falseElement('true-pswd', 'false-pswd');
        return false;
    }
    else {
        trueElement('true-pswd', 'false-pswd');
        return true;
    }
}
function checkPswd2(event) {
    var inputPswd2 = event.target;
    checkPswd2Form(inputPswd2);
}
function checkPswd2Form(inputPswd2) {
    var password = document.forms["form-user"]["password"].value;
    if (password != inputPswd2.value || inputPswd2.value == '') {
        falseElement('true-pswd2', 'false-pswd2');
        return false;
    }
    else {
        trueElement('true-pswd2', 'false-pswd2');
        return true;
    }
}
function validateForm() {
    var inputName = document.forms["form-user"]["name"];
    var inputEmail = document.forms["form-user"]["email"];
    var inputPassword = document.forms["form-user"]["password"];
    var inputPassword2 = document.forms["form-user"]["password2"];
    var info = document.getElementById("info");
    var valid = true;
    info.value = '';
    if (!checkNameForm(inputName)) {
        info.value += ' Nombre incorrecto';
        valid = false;
    }
    if (!checkEmailForm(inputEmail)) {
        info.value += ' Email incorrecto';
        valid = false;
    }
    if (!checkPswdForm(inputPassword)) {
        info.value += ' Password incorrecta';
        valid = false;
    }
    if (!checkPswd2Form(inputPassword2)) {
        info.value += ' Password 2 incorrecta';
        valid = false;
    }
    if (valid) {
        return true;
    }
    else {
        return false;
    }
}
function trueElement(trueElement, falseElement) {
    var correct = document.getElementById(trueElement);
    var incorrect = document.getElementById(falseElement);
    correct.hidden = false;
    incorrect.hidden = true;
}
function falseElement(trueElement, falseElement) {
    var correct = document.getElementById(trueElement);
    var incorrect = document.getElementById(falseElement);
    correct.hidden = true;
    incorrect.hidden = false;
}
/*** 6 */
function nuevoTransporte() {
    var transport = prompt("Nom nou transport", "");
    if (transport != null) {
        var newDiv = document.createElement("div");
        newDiv.className = "form-check form-check-inline";
        var newInput = document.createElement("INPUT");
        newInput.setAttribute("type", "checkbox");
        newInput.setAttribute("id", transport);
        newInput.setAttribute("value", transport);
        newInput.className = "form-check-input";
        var newLabel = document.createElement("LABEL");
        newLabel.setAttribute("for", transport);
        newLabel.innerHTML = transport;
        newLabel.className = "form-check-label";
        newDiv.appendChild(newInput);
        newDiv.appendChild(newLabel);
        var divTransports = document.getElementById("transports");
        divTransports.appendChild(newDiv);
    }
}
function primerTransport() {
    var divTransports = document.getElementById("transports");
    divTransports.removeChild(divTransports.firstChild);
}
function ultimTransport() {
    var divTransports = document.getElementById("transports");
    divTransports.removeChild(divTransports.lastChild);
}
