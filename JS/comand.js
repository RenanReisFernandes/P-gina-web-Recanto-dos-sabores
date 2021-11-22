function validarEmail(){
    var email=
    document.querySelector('#email');
    var error=document.querySelector('#error-email');
    if(!email.checkValidity()){
        error.innerHTML='E-mail inválido!';
    }
}

function redefineMsg() {
     var error=document.querySelector('#error-email');
     if(error.innerHTML =='E-mail inválido!'){
         error.innerHTML ="";
     }
    
}