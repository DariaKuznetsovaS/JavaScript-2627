// Salida de datos
alert("Hola mundo");
console.log("Hola mundo");
document.write("Hola mundo");

let nombre,edad,incremento,nuevaEdad;

// Entrada
nombre = prompt("Teclea el nombre");
edad = prompt("Teclea la edad",0);
edad = parseInt(edad);
incremento = parseInt(prompt("Teclea el incremento"));

// Proceso
nuevaEdad = edad + incremento;

// salida
alert(nombre + " tendrá " + nuevaEdad + " dentro de " + incremento + " años");

// Declaración y llenado
var cadena1 = prompt("Teclea la primera cadena", "cadena uno");
var cadena2 = prompt("Teclea la segunda cadena", "cadena dos");

// Salida
alert (cadena1 + cadena2);
alert (cadena1.concat(cadena2));

// Entrada de datos con valor por defecto.
let n1 = parseInt(prompt("Teclea el primer número",0));
let n2 = parseInt(prompt("Teclea el segundo número",0));

// Operaciones y salidas
// Suma
alert("El resultado de la suma es: "+ (n1+n2));
// Resta
let resta = n1 - n2;
alert("El resultado de la resta es:" + resta);
// Multiplicación
alert("El resultado de la multiplicación es: " + (n1*n2));
// División
alert("El resultado de la división es: " + (n1/n2));
// Resto
alert("El resto de la división es: " + (n1%n2));

let nro = parseInt(prompt("Teclea un número"));

// clase Math
let cuadrado = Math.pow(nro,2);
let cubo = Math.pow(nro,3);

alert("El doble de " + nro + " es " + cuadrado + " y el cubo " + cubo);
