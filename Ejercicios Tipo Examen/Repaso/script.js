document.getElementById("bAñadir").addEventListener("click",añadirProducto);

function añadirProducto(){
    try{
        let nombre=document.getElementById("nombre").value;
        let precio=document.getElementById("precio").value;
        let categoriaSeleccionada=document.querySelector('input[name="categoria"]:checked'); 

        if(!nombre|| !precio){
            throw new Error("Los campos son obligatorios");
        }
        if(nombre.length<3){
            throw new Error("Nombre del producto demasiado corto");
        }
        if(precio<=0){
            throw new Error("El precio tiene que ser mayor que 0. Aquí no se regala na");
        }
        if(!categoriaSeleccionada){
            throw new Error("Debes seleccionar una categoría");
        }
        //Hay que coger el valor de la categoria seleccionadam porque sino coge toda la linea
        let categoria=categoriaSeleccionada.value;
        //CREAR OBJETO

        let producto={
            nombre: nombre,
            precio: precio,
            categoria: categoria
        };

        //Las demás funciones, pasandoles el objeto:
        guardarProducto(producto);
        mostrarProducto(producto);
        enviarServidor(producto);
        alert("Producto añadadio correctamente");

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
    localStorage.setItem("productos", JSON.stringify(productos));
}

function mostrarProducto(producto){
   

    let div = document.getElementById("listaProductos");

    let tabla = document.createElement("table");

    // Cabecera
    let cabecera = document.createElement("tr");

    let thNombre = document.createElement("th");
    thNombre.textContent = "Nombre";

    let thPrecio = document.createElement("th");
    thPrecio.textContent = "Precio";

    let thCategoria = document.createElement("th");
    thCategoria.textContent = "Categoría";

    cabecera.appendChild(thNombre);
    cabecera.appendChild(thPrecio);
    cabecera.appendChild(thCategoria);

    tabla.appendChild(cabecera);


    // Producto
    let fila = document.createElement("tr");

    let nombre = document.createElement("td");
    nombre.textContent = producto.nombre;

    let precio = document.createElement("td");
    precio.textContent = producto.precio + " €";

    let categoria = document.createElement("td");
    categoria.textContent = producto.categoria;

    fila.appendChild(nombre);
    fila.appendChild(precio);
    fila.appendChild(categoria);

    tabla.appendChild(fila);


    // Meter la tabla dentro del div
    div.appendChild(tabla);
}


function enviarServidor(producto){
    fetch("http://localhost/productos.php",{
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(producto)
    })
    .then(response=>response.json())
    .then(data=>{
        console.log("Respuesta del servidor", data);
    })
    .catch(error=>{
        console.log("Error al contactar con el servidor", error)
    });
}