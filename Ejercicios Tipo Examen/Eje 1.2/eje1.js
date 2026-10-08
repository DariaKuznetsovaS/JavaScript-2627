
document.getElementById("bEntrar").addEventListener("click",entrar);
document.getElementById("bRegistrar").addEventListener("click",registrar);


let usuarios = new Map([
    ["admin", {
        nombre: "Administrador",
        contraseña: "Admin1234"
    }],
    ["user1", {
        nombre: "Usuario 1",
        contraseña: "Qwerty123"
    }]
]);


function obtenerUsuario(){
    try{
    let user = document.getElementById("user").value;
    let pass= document.getElementById("pass").value;

        if (!user || !pass) {
            throw new Error("Los campos no pueden quedar vacíos");
            }
        else if (!validarUser(user) || !validarContraseña(pass)) {
            throw new Error("Los campos no cumplen el formato");
        }
        else{
            //crear el objeto:
            let usuario={
                nombre: user,
                contraseña: pass
            };
            return usuario;

        }

    }catch(err){
        alert(err.message);
        return null;
    }

}

function entrar(){
    let usuario=obtenerUsuario();
    if(!usuario){
        return;
    }
    if(usuarios.has(usuario.nombre)){
        let datos=usuarios.get(usuario.nombre);
        if(datos.contraseña==usuario.contraseña){
            alert("Bienvenido, "+datos.nombre)
        } else alert("Contraseña incorrecta")

    } else{
        alert("Usuario no existe");
    }

}
function registrar(){
     alert("Estoy dentro de registrar");
   let usuario=obtenerUsuario();
   
    if(!usuario){ //Con esto se comprueba si los datos son correctos y despues se debería de comprobar si existen
        return;
    }

    if(usuarios.has(usuario.nombre)){
        alert("El usuario ya existe");
        return;
    }
     document.getElementById("registro").innerHTML = `
        <input type="text" id="nombreCompleto" placeholder="Nombre completo">
        <button id="bConfirmar">Confirmar registro</button>
    `;

    document.getElementById("bConfirmar").addEventListener("click", confirmarRegistro);
    

}

function validarUser(user){
    let regEx=/^[A-Za-z]{4,20}$/;
    return regEx.test(user);
}

function validarContraseña(pass){
    let regEx=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{5,}$/;
    return regEx.test(pass);
}



