document.getElementById("bRegistrar").addEventListener("click",registrar);
document.getElementById("bEntrar").addEventListener("click",entrar);

let usuarios = new Map();

let usuariosGuardados = localStorage.getItem("usuarios");

if(usuariosGuardados){
    usuarios = new Map(JSON.parse(usuariosGuardados));
}
function obtenerUsuario(){
    try{
let user=document.getElementById("user").value;
let contraseña=document.getElementById("contraseña").value;
if(!user||!contraseña){
    throw new Error("Los campos no pueden quedar vacíos(son solo dos, venga)");
}
else if(!validarUser(user)||!validarContraseña(contraseña)){
    throw new Error("Los campos no cumplen el formato");
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
        return null;
    }

}

function validarUser(user){
let regEx=/^[A-za-Z]{4,20}$/;
if(!regEx.test(user)){
    return false;
}
return true;
}

function validarContraseña(contraseña){
    let regEx=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
    if(!regEx.test(contraseña)){
        return false;
    }
    return true;
}


function entrar(){
    try{
    let usuario=obtenerUsuario();
    if(!usuario){
        return;
    }
     else if(!usuarios.has(usuario.userName)){
        throw new Error("Este usuario no existe");
    }
     else if(usuarios.get(usuario.userName) !== usuario.pass){
        throw new Error("La contraseña es incorrecta");
    }
    else alert("Sesión iniciada correctamente");

    
}catch(err){
    alert(err.message);
}
}

function registrar(){
try{
    let usuario=obtenerUsuario();
    if(!usuario){
        return;
    }
    if(usuarios.has(usuario.userName)){
        throw new Error("El nombre de usuario ya existe");
    }

    usuarios.set(usuario.userName, usuario.pass);

    alert("Usuario registrado correctamente");

    localStorage.setItem("usuarios",JSON.stringify([...usuarios]));


    
}catch(err){
    alert(err.message);
}
}






