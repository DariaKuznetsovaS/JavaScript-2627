
let usuarios = new Map();

usuarios.set("user1", "User1234");
usuarios.set("user2", "User456");

let usuario = prompt("Introduce el nombre de usuario");
let contraseña = prompt("Introduce la contraseña");

registrarUsuario(usuario, contraseña);


function validarUsuario(nombre) {
try {
let regEx = /^[0-9A-Za-z]{4,10}$/;

if (regEx.test(nombre)) {
return true;
} else {
throw new Error("El nombre del usuario no es válido");
}

} catch (err) {
console.log(err.message);
return false;
}
}


function validarContraseña(contraseña) {
try {
/*
Debe tener al menos 8 caracteres,
al menos una letra mayúscula,
una minúscula y un número
*/

let regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/;

if (regEx.test(contraseña)) {
return true;
} else {
throw new Error("La contraseña no cumple el patrón");
}

} catch (err) {
console.log(err.message);
return false;
}
}


function registrarUsuario(usuario, contraseña) {
try {

if (validarUsuario(usuario) && validarContraseña(contraseña)) {

if (usuarios.has(usuario) && usuarios.get(usuario) === contraseña) {
alert("Bienvenidx, " + usuario);
} else {
throw new Error("Usuario y/o contraseña incorrecta");
}

}

} catch (err) {
alert(err.message);
}
}