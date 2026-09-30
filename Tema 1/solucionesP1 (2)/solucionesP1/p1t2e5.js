// Alternativas
// Definición de una constante
const NRO = parseInt(prompt("Teclea un número"));

// alternativa
if ((NRO % 2) == 0)
    alert("El número es par");
else
    alert("El número es impar");


let n1,n2,n3;
n1 = parseInt(prompt("Teclea el primer número"));
n2 = parseInt(prompt("Teclea el segundo número"));
n3 = parseInt(prompt("Teclea el tercer número"));
    
// condiciones varias en if anidados
if (n1 > n2 && n1 > n3)
    alert("El mayor número es el primero " + n1);
else
    if (n2 > n3)
        alert("El mayor número es el segundo " + n2);
    else
        alert("El mayor número es el tercero " + n3);

// Vocal o no
let c = prompt("Teclea un carácter");
if (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u')
    alert("Es una vocal");
else
    alert("No es una vocal");

// Vocal o no
c = prompt("Teclea un carácter");
switch(c)
{
    case 'a': case 'e': case 'i': case 'o': case'u':
        alert("Es una vocal");
        break;
    default:
        alert("No es una vocal");
}

// Vocal o no
c = prompt("Teclea un carácter");
let vocales ="aeiou"
if (vocales.includes(c))
    alert("Es una vocal");
else
    alert("No es una vocal");


// Notas
    let nota = parseInt(prompt("Teclea la nota"));
    if (nota < 0 || nota > 10)
        alert("Nota incorrecta");
    else
        if (nota <3)
            alert("Muy deficiente");
        else
             // >=3
            if (nota < 5)
                alert("Insuficiente");
            else
                if (nota < 6)
                    alert("Suficiente");
                else
                    if (nota < 7)
                        alert("Bien");
                    else
                        if (nota < 9)
                            alert("Notable");
                        else
                            alert("Sobresaliente");

// Con Switch
nota = parseInt(prompt("Teclea una nota"));
switch (nota)
{
    case 0:
    case 1:
    case 2:
        alert("Muy deficiente");
        break;
    case 3:
    case 4:
        alert("Insuficiente");
        break;
    case 5:
        alert("Suficiente");
        break;
    case 6:
        alert("Bien");
        break;
    case 7:
    case 8:
        alert("Notable");
        break;
    case 9:
    case 10:
        alert("Sobresaliente");
        break;
    default:
        alert("Nota no válida");          
}

// Switch moderno
switch(true) 
  {
   case nota >=0 && nota < 3:
    calificacion = "muy deficiente";
    break;
   case nota >=3 && nota < 5:
    calificacion = " Insuficiente";
    break;
   case nota >=5 && nota < 6:
    calificacion = "suficiente";
    break;
   case nota >=6 && nota < 7:
    calificacion = "bien";
    break;
    case nota >=7 && nota < 9:
    calificacion = "notable";
    break;
    case nota >=9 && nota <= 10:
    calificacion = "sobresaliente";
    break;
    default:
    calificacion = "nota fuera de los valores posibles, ingrese una nota valida";
    
  }
  alert("Calificacion con switch >= " + calificacion)

// Reescribir if
let login = 'Empleado';
switch(login)
{
    case 'Empleado':
        message = 'Hola';
        break;
    case 'Director':
        message = 'Felicidades';
        break;
    case '':
        message = "Sin sesion";
        break;
    default:
        message = ' ';
}


login = 'Director';
let message;
switch(login)
{
    case 'Empleado':
        message = 'Hola';
        break;
    case 'Director':
        message = 'Felicidades';
        break;
    case '':
        message = "Sin sesion";
        break;
    default:
        message = ' ';
}
alert(message);


message = (login == 'Empleado') ? 'Hola' :
  (login == 'Director') ? 'Felicidades' :
  (login == '') ? 'Sin sesión' :
  '';
alert(message);




    