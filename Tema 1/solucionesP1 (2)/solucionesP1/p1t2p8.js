let asignaturas= new Map();

asignaturas.set('DWEC', 'Desarrollo Web en Entorno Cliente');
asignaturas.set('DWES', 'Desarrollo Web en Entorno Servidor');
asignaturas.set('DAW', 'Despliegue de aplicaciones web');
asignaturas.set('DIW', 'Desarrollo de interfaces web');

// Mostrar cantidad de asignaturas
alert("El tamaño es " + asignaturas.size);

// Mostrar el contenido completo
asignaturas.forEach((value, key) => {
    alert('La clave → ' + key + ' y su valor → ' + value );
});

//claves o siglas
for (dato of  asignaturas.keys()) {
    alert(dato);
}

// Nombres o valor
for (dato of  asignaturas.values()) {
    alert(dato);
}

// Buscar
if (asignaturas.has('ED'))
    alert ('ED si está');
else
    alert('ED no está');

if (asignaturas.has('DWEC'))
    alert ('DWEC si está');
else
    alert('DWEC no está');