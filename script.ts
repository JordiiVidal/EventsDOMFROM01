function start() {
    let inputName = <HTMLInputElement>document.forms["form-user"]["name"];
    inputName.addEventListener("keypress",checkName,false);

    let inputEmail = <HTMLInputElement>document.forms["form-user"]["email"];
    inputEmail.addEventListener("keypress",checkEmail,false);

    let inputPassword = <HTMLInputElement>document.forms["form-user"]["password"];
    inputPassword.addEventListener("keypress",checkPswd,false);

    let inputPassword2 = <HTMLInputElement>document.forms["form-user"]["password2"];
    inputPassword2.addEventListener("keypress",checkPswd2,false);
    
}

function checkName(event){
    let inputName =<HTMLInputElement>event.target;
    checkNameForm(inputName);
}

function checkNameForm(inputName){
    if(inputName.value.match(/^[A-z]{3,15}$/)){
        trueElement('true-name','false-name');
        return true;
    }else{
        falseElement('true-name','false-name');
        return false;
    }
}

function checkEmail(event){
    let inputEmail =<HTMLInputElement>event.target;
    checkEmailForm(inputEmail);
}

function checkEmailForm(inputEmail){
    var validate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(validate.test(String(inputEmail.value).toLowerCase())){
        trueElement('true-email','false-email');
        return true;
    }else{
        falseElement('true-email','false-email');
        return false;
    }
}

function checkPswd(event){
    let inputPswd =<HTMLInputElement>event.target;
    checkPswdForm(inputPswd);
}

function checkPswdForm(inputPswd){
    if(inputPswd.value.length<4 || inputPswd.value.length>10){
        falseElement('true-pswd','false-pswd');
        return false;
    }else{
        trueElement('true-pswd','false-pswd');
        return true;
    }
}

function checkPswd2(event){
    let inputPswd2 =<HTMLInputElement>event.target;
    checkPswd2Form(inputPswd2);
}

function checkPswd2Form(inputPswd2){
    var password = <HTMLInputElement>document.forms["form-user"]["password"].value;
    if(password != inputPswd2.value || inputPswd2.value == ''){
        falseElement('true-pswd2','false-pswd2');
        return false;
    }else{
        trueElement('true-pswd2','false-pswd2');
        return true;
    }
}

function validateForm(){

    let inputName = <HTMLInputElement>document.forms["form-user"]["name"];
    let inputEmail = <HTMLInputElement>document.forms["form-user"]["email"];
    let inputPassword = <HTMLInputElement>document.forms["form-user"]["password"];
    let inputPassword2 = <HTMLInputElement>document.forms["form-user"]["password2"];
    var info  = <HTMLTextAreaElement>document.getElementById("info");

    var valid = true;

    info.value = '';

    if(!checkNameForm(inputName)){
        info.value += ' Nombre incorrecto';
        valid = false;
    } 
    if(!checkEmailForm(inputEmail)){
        info.value += ' Email incorrecto';
        valid = false;
    }
    if(!checkPswdForm(inputPassword)){
        info.value += ' Password incorrecta';
        valid = false;
    }
    if(!checkPswd2Form(inputPassword2)){
        info.value += ' Password 2 incorrecta';
        valid = false;
    }

    return valid;

}

function trueElement(trueElement:string,falseElement:string){
    let correct = <HTMLElement>document.getElementById(trueElement);
    let incorrect = <HTMLElement>document.getElementById(falseElement);
    correct.hidden = false;
    incorrect.hidden = true;
}
function falseElement(trueElement:string,falseElement:string){
    let correct = <HTMLElement>document.getElementById(trueElement);
    let incorrect = <HTMLElement>document.getElementById(falseElement);
    correct.hidden = true;
    incorrect.hidden = false;
}

/*** 6 */

function nuevoTransporte(){

    var transport = prompt("Nom nou transport", "");

  if (transport != null) {

    let newDiv = document.createElement("div");
    newDiv.className = "form-check form-check-inline";

    let newInput = document.createElement("INPUT");
    newInput.setAttribute("type","checkbox");
    newInput.setAttribute("id",transport);
    newInput.setAttribute("value",transport);
    newInput.className = "form-check-input";

    let newLabel = document.createElement("LABEL");
    newLabel.setAttribute("for",transport);
    newLabel.innerHTML= transport;
    newLabel.className = "form-check-label";


    newDiv.appendChild(newInput);
    newDiv.appendChild(newLabel);

    let divTransports = document.getElementById("transports");
    divTransports.appendChild(newDiv);

  }

}
function primerTransport(){
    let divTransports = document.getElementById("transports");
    divTransports.removeChild(divTransports.firstChild);
}
function ultimTransport(){
    let divTransports = document.getElementById("transports");
    divTransports.removeChild(divTransports.lastChild);
}