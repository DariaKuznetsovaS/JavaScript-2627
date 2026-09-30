let n1 = 16;
alert('Valor inicial de n1 ' + n1);

n1 = 16.678;
alert('Segundo valor de n1' + n1);

let parteEntera = Math.trunc(n1);
alert('Parte entera con trunc ' + parteEntera);
parteEntera = parseInt(n1);
alert('Parte entera con parseInt ' + parteEntera);
parteEntera = Math.floor(n1); // redondeo hacía abajo.
alert('Parte entera con floor ' + parteEntera);

let parteDecimal = n1 - parteEntera;
alert('Parte decimal con resta ' + parteDecimal) // Cuidado con los decimales.

let redondeoArriba = Math.ceil(n1);
alert('Redondeo hacia arriba ' + redondeoArriba);

let redondeoAbajo = Math.floor(n1);
alert('Redondeo hacia abajo ' + redondeoAbajo);

let redondeo = Math.round(n1);
alert('Redondeo ' + redondeo);

let dosDecimales = n1.toFixed(2);
alert('Solo dos decimales ' + dosDecimales);