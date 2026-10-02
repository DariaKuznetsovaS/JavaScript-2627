document.getElementById("bRegistrar").addEventListener("click",registrar);
document.getElementById("bEntrar").addEventListener("click",entrar);


function obtenerUsuario(){
    try{
let user=document.getElementById("user").value;
let contraseña=docuemnt.getElementById("contraseña").value;
if(!user||!contraseña){
    throw new("Los campos no pueden quedar vacíos(son solo dos, venga)");
}
else if(!validarUser(user)||!validarContraseña(contraseña)){
    throw new("Los campos no cumplen el formato");
}
else{
    usuario={
        userName: user,
        pass: contraseña

    };
    return usuario;
}
    }
    catch(err){
        alert(err.message);
    }

}

function validarUser(user){
let regEx="^[A-za-Z]{4,20}$";
if(!test(user, regEx)){
    return false;
}
return true;
}

function validarContraseña(contraseña){
    if(!test(contraseña,"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$")){
        return false;
    }
    return true;
}


function entrar(){
    try{
    let usuario=obtenerUsuario();
    if(!usuario){
        throw new("El user está vacío");
    }
}catch(err){
    alert(err,message);
}
}

function registrar(){

}





