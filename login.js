function login(){
    
    var RA = document.getElementById("inputRA").value;
    var senha = document.getElementById("inputPassword").value;

    if(RA != null && senha != "null"){
        return true;
    }else{
        window.alert("Algo deu errado, redigite seu RA e/ou senha");
        return false;
    }

}