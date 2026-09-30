 const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

// Entrada
let dniCompleto = prompt("Teclea un dni");

// Separación
let letra = dniCompleto.charAt(8);
let numeroDni = parseInt(dniCompleto.substring(0,8));

if (!isNaN(numeroDni))
{
    // Comprobación letra
    const DIVISOR = 23;
    let resto = numeroDni % DIVISOR;
    if (letra === letras[resto])
        alert("Dni correcto");
    else
        alert("Dni incorrecto");
}
else
    alert("Dni incorrecto");



// Sueldos de los operarios.
// Declaración
// let arraySueldos = [];
let arraySueldos = new Array();
    
// llenado
for(let x = 0; x < 5; x++)
    arraySueldos[x] = parseInt(prompt("Teclea un sueldo"));
        
// Recorrido
let total = 0;
for(let x = 0; x < arraySueldos.length; x++)
    total += arraySueldos[x];
        
 // Salida
 alert(" (for) El total de sueldos asciende a: " + total);
    
    
// Segunda forma.
// Recorrido
let total2 = 0;
let i;
for(i in arraySueldos)
    total2 += arraySueldos[i];
	
// Salida
alert(" (for in) El total de sueldos asciende a: " + total2);

// Tercera forma
// Recorrido
let total3 = 0;
arraySueldos.forEach((elemento)=>total3 += elemento);
// Salida
alert(" (foreach) El total de sueldos asciende a: " + total3);

// Cuarta forma
// Recorrido
let total5 = 0;
for(sueldo of arraySueldos)
    total5 += sueldo;
	
// Salida
alert(" (for of) El total de sueldos asciende a: " + total5);

// Suma con reduce
const total4 = arraySueldos.reduce((acumulador, numeroActual) => acumulador + numeroActual, 0);
alert(" (reduce) El total de sueldos asciende a: " + total4);



// Mes en letra y días del mes
// Arrays coincidentes
let meses = ["Enero", "Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
let dias = [31,28,31,30,31,30,31,31,30,31,30,31];

let mesNumero = parseInt(prompt("Teclea un mes en número"));

alert("Has indicado " + meses[mesNumero - 1] + " que tiene " + dias[mesNumero - 1] + " dias");


// Segunda forma
let meses2 = ["Enero", "Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
let mes = meses2[mesNumero - 1];

let diasMeses = new Map();
diasMeses.set("Enero",31);
diasMeses.set("Febrero",28);
diasMeses.set("Marzo",31);
diasMeses.set("Abril",30);
diasMeses.set("Mayo",31);
diasMeses.set("Junio",30);
diasMeses.set("Julio",31);
diasMeses.set("Agosto",31);
diasMeses.set("Septiembre",30);
diasMeses.set("Octubre",31);
diasMeses.set("Noviembre",30);
diasMeses.set("Diciembre",31);
alert("Has indicado " + mes + " que tiene " + diasMeses.get(mes) + " dias");

// Porcentaje de vocales
let cadena = prompt("Teclea una cadena de caracteres").toLowerCase();

let contador = 0;
// Contar vocales
for ( let x = 0; x < cadena.length; x++)
    if (cadena.charAt(x) == 'a' || cadena.charAt(x) == 'e' || cadena.charAt(x) == 'i' || cadena.charAt(x) == 'o' || cadena.charAt(x) == 'u')
        contador++;
		
// Calcular el porcentaje
let porcentaje = (contador * 100)/cadena.length;

// Salida
alert("El porcentaje de vocales es del " + porcentaje + "%");


// Segunda forma
// Convertir string en array para usar filter. Cada carácter un elemento.
var array = cadena.split('');

let vocales = array.filter(elemento =>elemento == 'a' || elemento == 'e' || elemento == 'i' || elemento == 'o' || elemento == 'u');

// Calcular el porcentaje
let porcentaje2 = (vocales.length * 100)/cadena.length;

// Salida
alert("El porcentaje de vocales es del " + porcentaje2 + "%");


// Tercera forma
// Porcentaje de vocales en una cadena.
let vocales3 = ["a","e","i","o","u"];
let contador3 = 0;

for(let x=0; x < cadena.length;x++)
{
    if (vocales3.indexOf(cadena.charAt(x)) != -1)
        contador3++;
}

// Calcular el porcentaje
let porcentaje3 = (contador3 * 100)/cadena.length;

// Salida
alert("El porcentaje de vocales es del " + porcentaje3 + "%");


// Cuarta forma
// Porcentaje de vocales en una cadena.
// El método match() se usa para obtener todas las ocurrencias de una expresión regular dentro de una cadena. Devuelve un array. Si no hay vocales falla.

var numeroVocales = cadena.match(/[aeiou]/gi).length;

// Calcular el porcentaje
let porcentaje4 = (numeroVocales * 100)/cadena.length;

// Salida
alert("El porcentaje de vocales es del " + porcentaje4 + "%");



// Crear primer array
let arrayUno = [2,4,56,75,3,123];

// Crear segundo array
let arrayDos = []
let continuar = true // Variable con distintos tipos de datos
x = 0;
do
{
    continuar = prompt("Teclea un número para el segundo array");
    if (continuar != null)
    {
        arrayDos[x] = parseInt(continuar);
        x = x + 1;
    }
    else
        continuar = false;        
}
while(continuar);
alert(arrayDos);

// Mostrar menú
let opcion;
do{
    opcion = prompt("Elige una opción: \n a) Mostrar los números pares del primer array.\nb) Buscar un valor tecleado por el usuario en el segundo array.\nc)Mostrar todos los números mayores de 10 del primer array.\nd)Crear un string a partir de todos los datos del primer array.\ne)Borrar el primer elemento, el último  y un elemento intermedio del array dos.\nf)Unir los dos arrays formando sólo uno. Visualiza el contenido de este tercer array.\ng)Crear un nuevo array con todos los números impares del array uno.\nh)Sumar un dos a cada uno de los elementos del array dos.\ni)Duplicar los dos primeros elementos del primer array a partir de la posición cuatro.\nj)Guardar un 6 en cada una de las posiciones del array dos.\nk)Mostrar el contenido de un array empezando por la última posición y acabando por la primera.\nl)Ordenar de mayor a menor el contenido de un array.\n m)Salir");
    // Opciones del menu
    switch(opcion.toLowerCase())
    {
        case 'a': mostrarPares();
                break;
        case 'b': buscar();
                break;
        case 'c': mostrarMayores10();
                break;
        case 'd': crearString();
                break;
        case 'e': borrarPrimeroUltimoIntermedio();
                break;
        case 'f': unir();
                break;
        case 'g': nuevoImpares();
                break;
        case 'h': sumarDos();
                break;
        case 'i': duplicar();
                break;
        case 'j': guardarSeis();
                break;
        case 'k': mostrar();
                break;
        case 'l': ordenar();
                break;
        case 'm': // salir
                break;
        default: 
            alert("Opción incorrecta");
    }
}
while (opcion != 'm');


function mostrarPares()
{
    // Mostrar los números pares del primer array
   let paresArray = "";
   for (let i = 0; i < arrayUno.length; i++) {
        if (arrayUno[i] % 2 === 0) {
            paresArray += arrayUno[i] + "\n";
         }
    }
    alert("Los números pares del primer array son\n" + paresArray);

    paresArray = "";
    arrayUno.forEach(elemento => {
        if (elemento % 2 == 0)
            paresArray += elemento + "\n";
    });
    alert("Los números pares del primer array son\n" + paresArray);


    nuevoArray = arrayUno.filter(e => e%2 == 0);
    alert(nuevoArray);
}


function buscar()
{
    // Buscar en el array dos. Un número que puede aparecer varias veces
    let valor = parseInt(prompt("Indica el número que quieres buscar en el array dos"));
    let posiciones="";
    for(let x = 0; x < arrayDos.length; x++)
        if (arrayDos[x] === valor)
            posiciones += x + " ";
    if (posiciones === "")
        alert("El número indicado no se encuentra en el array dos");
    else
        alert("El número " + valor + " se encuentra en la siguiente posición o posiciones: " + posiciones);
    

   posiciones = "";
   let posicion = arrayDos.indexOf(valor);
   while (posicion != -1) 
   {
       posiciones += posicion + " ";
       posicion = arrayDos.indexOf(valor, posicion + 1); // Se busca desde una posición concreta.
   }

   if (posiciones === "")
        alert("El número indicado no se encuentra en el array dos");
    else
        alert("El número " + valor + " se encuentra en la siguiente posición o posiciones: " + posiciones);    
}


function mostrarMayores10()
{
    // Mostrar mayores de 10 del primer array
    let mayores = "";
    for(let x = 0; x < arrayUno.length; x++)
        if (arrayUno[x] > 10)
            mayores += arrayUno[x] + " ";
    alert("Los números mayores de 10 del primer array son: " + mayores);

    let arrayNuevo = arrayUno.filter(elemento => elemento > 10);
    alert(arrayNuevo);    
}


function crearString()
{
    // Crear string a partir del primer array
    let cadena = arrayUno.toString();
    alert("Tipo de datos: " + typeof(cadena) + " contenido " + cadena);
}


function borrarPrimeroUltimoIntermedio()
{
    // Borrar primer elemento, último y uno intermedio del array dos
    let datosIniciales = arrayDos.toString();
    // primera posición
    arrayDos.shift();
    datosIniciales += "\n" + arrayDos.toString();
     // última
    arrayDos.pop();
    datosIniciales += "\n" + arrayDos.toString();
    // posición intermedia
    let posicion = parseInt(prompt("Teclea la posición que quieres eliminar"));
    arrayDos.splice(posicion,1);
    datosIniciales += "\n" + arrayDos.toString();
    alert(datosIniciales);
}


function unir()
{
    // Unir el array uno y dos formando un tercero.
    let arrayTres = arrayUno.concat(arrayDos);
    alert(arrayTres);
}


function nuevoImpares()
{
    // Nuevo array con los numeros impares del array uno.
    let arrayImpares = arrayUno.filter((elemento) => elemento % 2 != 0)
    alert(arrayUno + "\n" + arrayImpares);
}


function duplicar()
{
    let datosIniciales= arrayUno + "\n";
    arrayUno.splice(4,0,arrayUno[0],arrayUno[1]);
    // 0 para añadir
    alert(datosIniciales + arrayUno);
}


function sumarDos()
{
    // Sumar un dos a cada uno de los elementos del array dos
    arrayDos.forEach((value, index, arrayDos) => arrayDos[index] += 2);
    alert("Valores del array dos sumando un dos " + arrayDos);

    // Los forEach usados hasta ahora no modifican.
    arrayDos.forEach((value) => value += 2);
    alert("Valores del array dos sumando un dos " + arrayDos);
}


function guardarSeis()
{
    // Poner un seis en cada una de las posiciones del array dos
   /* for (let i = 0; i < arrayDos.length; i++)
   {
        arrayDos[i] = 6;
    }
    alert(arrayDos.toString());*/

    arrayDos.fill(6)
    alert(arrayDos.toString());
}

function mostrar()
{
    // Mostrar el contenido empezando por la última posición
    let contenido = "";
    for (let i = arrayUno.length-1; i >=0 ; i--)
    {
        contenido+=arrayUno[i]+" ";
    }
    alert(contenido);

    alert(arrayUno.reverse());
}


function ordenar()
{
    // Ordenar de mayor a menor.
    arrayUno.sort(function(a, b){return b-a});
    alert(arrayUno);

    /*
            function compare(a, b) {
        if (a es menor que b según criterio de ordenamiento) {
            return -1;
        }
        if (a es mayor que b según criterio de ordenamiento) {
            return 1;
        }
        // a debe ser igual b
        return 0;
        }
   */
}


// Array bidimensional
let arrayBidimensional=[];
let fila = 0;
let respuesta;
do
{
    arrayBidimensional[fila] = new Array(3);
    let nro = parseInt(prompt("Teclea el primer número de la fila"));
    arrayBidimensional[fila][0]=nro;
    nro = parseInt(prompt("Teclea el segundo número de la fila"));
    arrayBidimensional[fila][1]=nro;
    fila++;
    respuesta = confirm("¿ Quieres continuar con más filas?");
}
while (respuesta);

// hacer las sumas
for (let x = 0; x < arrayBidimensional.length; x++)
    arrayBidimensional[x][2] = arrayBidimensional[x][0] + arrayBidimensional[x][1];

// Mostrar
cadena ="";
for(let x = 0; x < arrayBidimensional.length;x++)
   cadena += arrayBidimensional[x][0] + " + " + arrayBidimensional[x][1] + " = " + arrayBidimensional[x][2] + "\n";
alert(cadena);


