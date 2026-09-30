let cadena = 'Hola';

alert("Cadena en mayúsculas " + cadena.toUpperCase()); // HOLA

alert("Carácter de la posición dos " + cadena.charAt(2)); // l NO o. Empieza en la posición cero.

alert("Carácter de la posición cuatro " + cadena.charAt(4)); // En blanco Nohay posición cuatro.

alert("¿ Incluye la j? " + cadena.includes('j')); // false

alert("Posición de la o" + cadena.indexOf('o')); // 1

alert("Longitud " + cadena.length); // 4

let otra = cadena + ' buenos días';
alert(otra); // Hola buenos días

let subcadena = otra.substr(3,3);
alert(subcadena); // a b
subcadena = otra.substr(3,4); // a bu
alert(subcadena)
      
subcadena = otra.substring(3,6);
alert(subcadena); // a b
subcadena = otra.substring(3,7); // a bu
alert(subcadena)
