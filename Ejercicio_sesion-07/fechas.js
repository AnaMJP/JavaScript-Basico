const hoy = new Date();
console.log(hoy);

const nacimiento = new Date(2000, 4, 9);
console.log(nacimiento.toLocaleDateString());

const tarde = hoy > nacimiento;
console.log(tarde);

const dia = nacimiento.getDate();
console.log(dia);
const mes = nacimiento.getMonth();
console.log(mes);
const anio = nacimiento.getFullYear();
console.log(anio);

