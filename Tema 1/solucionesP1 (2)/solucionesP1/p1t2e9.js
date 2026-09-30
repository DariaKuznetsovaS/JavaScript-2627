let telefonos = new Set();

telefonos.add('111111111');
telefonos.add('945676767');
telefonos.add('999777555');
telefonos.add('678678678');

// const telefonos = new Set(['111111111', '945676767', '999777555', '678678678']);

for (let valor of telefonos) {
  alert(valor);
}
telefonos.add('111111111'); // Valor repetido que no añade

telefonos.forEach(valor => alert(valor));

if (telefonos.has('678678678'))
    alert('Hay una persona con ese teléfono');
else
    alert('No hay una persona con ese teléfono');

if (telefonos.has('777777777'))
    alert('Hay una persona con ese teléfono');
else
    alert('No hay una persona con ese teléfono');