// Repetitivas
// Concatenar cadenas
let cadenaEntrada, cadenaSalida;
alert(cadenaEntrada) // undefined
cadenaEntrada = prompt("Teclea una cadena de caracteres");
// Si damos a cancelar tiene null. Si no escribimos y pulsamos aceptar está vacía.
while (cadenaEntrada != null && cadenaEntrada !== "")
{
    cadenaSalida = cadenaSalida + cadenaEntrada + " - "; //concat
    cadenaEntrada = prompt("Teclea una cadena de caracteres");
}
alert(cadenaSalida ?? " No has tecleado ninguna cadena");

// Segunda forma: La primera doy por hecho que no es null
let cadenaEntrada2, cadenaSalida2 = "";
cadenaEntrada2 = prompt("Teclea una cadena de caracteres si o si");
do
{
    cadenaSalida2 = cadenaSalida2 + cadenaEntrada2 + " - ";
    cadenaEntrada2 = prompt("Teclea una cadena de caracteres");
}
while(cadenaEntrada2 != null);
// Quitar el último guión
cadenaSalida2 = cadenaSalida2.substring(0,(cadenaSalida2.length - 2));
alert(cadenaSalida2);

// Sumar números
let nro = 0, suma = 0;
while (nro != null)
{
    nro = prompt("Teclea un número");
    if (nro != null) // == null significa que ha pulsado cancelar
    {
        // Es un número?
        nro = parseInt(nro);
        if (isNaN(nro))  // isNaN es true cuando no es un número o cuando pulsa cancelar.
            alert("Hay que teclear números");
        else
            suma += nro;
    }
}
alert("La suma de todos los números tecleados es: " + suma);

// Pirámide del 1 al 9
let piramide = "";
for(let nro = 1; nro < 10; nro++)
{
    for(let repeticiones = 0; repeticiones < nro;repeticiones++)
       piramide = piramide + nro;
    piramide += "\n";
}
alert(piramide);

// Múltiplos de 4 y 9
let texto = "";
let contadorLineas = 0;
for(let nro = 1; nro <= 50; nro ++)
{
   
    texto += nro;
    if ((nro % 4) == 0)
        texto += " Multiplo de cuatro";
    // Es posible que sea múltiplo de 4 y de 9
    if ((nro % 9) == 0)
        texto += " Multiplo de nueve";
    texto += "\n" // <br>
    contadorLineas++;
        
    if (contadorLineas==5)
    {
        texto += "_________________________\n";
        contadorLineas = 0;
    }
}
console.log(texto);

// Factorial
let nrof = parseInt(prompt("Teclea un número"));
let factorial = 1;
for ( let x = nrof; x > 1; x--)
    factorial = factorial * x;
alert("El factorial de " + nrof + " es " + factorial);


    
    