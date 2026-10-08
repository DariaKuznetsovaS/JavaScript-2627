document.getElementById("bRegistrar").addEventListener("click",registrar);
document.getElementById("bEntrar").addEventListener("click",entrar);

function obtenerUsuario() {
    try {
        let user = document.getElementById("user").value;
        let contraseña = document.getElementById("contraseña").value;

        if (!user || !contraseña) {
            throw new Error("Los campos no pueden quedar vacíos");
        }
        else if (!validarUser(user) || !validarContraseña(contraseña)) {
            throw new Error("Los campos no cumplen el formato");
        }
        else {
            let usuario = {
                userName: user,
                pass: contraseña
            };

            return usuario;
        }

    } catch (err) {
        alert(err.message);
        return null;
    }
}

function validarUser(user) {
    let regEx = /^[A-Za-z]{4,20}$/;
    return regEx.test(user);
}

function validarContraseña(contraseña) {
    let regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/;

    return regEx.test(contraseña);
}


function entrar() {

    let usuario = obtenerUsuario();

    if (!usuario) {
        return;
    }

    let usuarios;

    if (localStorage.getItem("usuarios")) {
        usuarios = new Map(JSON.parse(localStorage.getItem("usuarios")));
    }
    else {
        usuarios = new Map();
    }

    if (usuarios.has(usuario.userName)) {

        let datosUsuario = usuarios.get(usuario.userName);

        if (datosUsuario.pass === usuario.pass) {
            alert("Bienvenido " + datosUsuario.nombreCompleto);
        }
        else {
            alert("Usuario y/o contraseña incorrectos");
        }

    }
    else {
        alert("Usuario y/o contraseña incorrectos");
    }
}

function registrar() {

    let usuario = obtenerUsuario();

    if (!usuario) {
        return;
    }

    let usuarios;

    if (localStorage.getItem("usuarios")) {
        usuarios = new Map(JSON.parse(localStorage.getItem("usuarios")));
    }
    else {
        usuarios = new Map();
    }

    if (usuarios.has(usuario.userName)) {
        alert("El usuario ya existe");
        return;
    }

    let nombreCompleto = document.getElementById("nombreCompleto").value;

    usuarios.set(usuario.userName, {
        pass: usuario.pass,
        nombreCompleto: nombreCompleto
    });

    localStorage.setItem("usuarios", JSON.stringify([...usuarios]));

    alert("Usuario registrado correctamente");
}





