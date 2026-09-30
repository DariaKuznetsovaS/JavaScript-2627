// Fecha de hoy
alert('Hoy ' + new Date());

// Fecha de hoy en milisegundos
alert('Hoy en milisegundos ' + new Date().getTime());
alert('Hoy en milisegundos ' + Date.now());

// Años que han pasado
// Un año tiene 365 dias x 24 horas x 60 minutos x 60 segundos x 1000
// 31.536.000.000
let años = (new Date().getTime() / 31536000000);
alert('Años que han pasado ' + parseInt(años));

// Sumar un año a la fecha
let fechaMasUno = new Date();
fechaMasUno.setFullYear(fechaMasUno.getFullYear() + 1)
alert(fechaMasUno.getDate() + "/" + (fechaMasUno.getMonth() +1) + "/" + fechaMasUno.getFullYear());

// Calcular edad a partir de la fecha de nacimiento.
let fechaNacimiento= new Date('11/11/2000');
let milisegundos = (new Date().getTime()) - fechaNacimiento;
let edad = milisegundos / 31536000000;
alert('Edad ' + parseInt(edad));

// Otra forma de calcular la edad
let hoy = new Date();
edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
let mes = hoy.getMonth() - fechaNacimiento.getMonth();

if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimientos.getDate())) {
        edad--;
}
alert(edad);

// Navidad
hoy = new Date();
let diaNavidad = new Date (hoy.getFullYear(),11,25)
milisegundos = diaNavidad.getTime() - hoy.getTime();
let dias = milisegundos / (24 * 60 * 60 * 1000);

alert("Faltan " + parseInt(dias) + " dias para navidad");



