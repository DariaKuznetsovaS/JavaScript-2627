document.getElementById("bAñadir").addEventListener("click", añadirProducto);

function añadirProducto(){
try{
    let nombre=document.getElementById("nombre").value;
    let precio=document.getElementById("precio").value;
    let categoria=document.getElementById("categoria").value;

    if(!nombre || !precio || !categoria){
        throw new Error("Todos los campos son obligatorios");
    }
    if(nombre.length<3){
        throw new Error("Nombre muy corto");
    }
    if(precio <= 0){
            throw new Error("El precio debe ser mayor que 0");
    }

    // CREACIÓN DEL OBJETO

        let producto = {
            nombre: nombre,
            precio: Number(precio),
            categoria: categoria
        };

        guardarProducto(producto);
        mostrarProducto(producto);
        enviarServidor(producto);
        alert("Producto añadido correctamente");


} catch(err){
    alert(err.message);
}
}

function guardarProducto(producto){
    let productos=JSON.parse(localStorage.getItem("productos"));

    if(!productos){
        productos=[];
    }

    productos.push(producto);
    localStorage.setItem("productos", JSON.stringify(productos));
}

function mostrarProducto(producto){

    let div = document.createElement("div");

    let titulo = document.createElement("h3");
    titulo.textContent = producto.nombre;

    let precio = document.createElement("p");
    precio.textContent = "Precio: " + producto.precio + " €";

    let categoria = document.createElement("p");
    categoria.textContent = "Categoría: " + producto.categoria;

    div.appendChild(titulo);
    div.appendChild(precio);
    div.appendChild(categoria);

    document.getElementById("listaProductos").appendChild(div);
}

function enviarServidor(producto){

    fetch("http://localhost/productos.php", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(producto)

    })
    .then(response => response.json())
    .then(data => {
        console.log("Respuesta del servidor:", data);
    })
    .catch(error => {
        console.log("Error al contactar con el servidor:", error);
    });
}