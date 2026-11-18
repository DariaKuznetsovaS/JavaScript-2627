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
        throw new Error("El nombre del producto es muy corto");
    }
    if(precio<=0){
        throw new Error("Qué está gratis el producto o que?")
    }

    producto={
        nombre: nombre,
        precio: precio,
        categoria: categoria
    };

    guardarProducto(producto);
    mostrarProducto(producto);
    enviarServidor(producto);

} catch(error){
    alert(error.message);
}
}

function guardarProducto(producto){
    let productos=JSON.parse(localStorage.getItem("productos"));

    if(!productos){
        productos=[];
    }
    productos.push(producto);

    localStorage.setItem("productos",JSON.stringify(productos));
    
}

function mostrarProducto(producto) {
    let div = document.getElementById("listaProductos");

    div.innerHTML += `
        <table>
            <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Categoría</th>
            </tr>
            <tr>
                <td>${producto.nombre}</td>
                <td>${producto.precio} €</td>
                <td>${producto.categoria}</td>
            </tr>
        </table>
    `;
}


function enviarServidor(producto){
    fetch("http:localhost/productos.php",{
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(producto)

    })
    .then(response => response.json())
    .then(data=>{
        console.log("Respuesta al servidor", data);
    })
    .catch(error=>{
        console.log("Error al contactar con el servidor", error);
    })
}