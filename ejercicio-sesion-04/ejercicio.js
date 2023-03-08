let nombre = "Ana Maria";
let apellido = "Jimenez";
let estudiante = ` ${nombre} ${apellido} `;
console.log(estudiante);

let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

let longitud = estudiante.length;
console.log(longitud);

let inicial_nombre = nombre.charAt(0);
console.log(inicial_nombre);

let final_apellido = apellido.charAt(apellido.length-1);
console.log(final_apellido);

let sin_espacios = estudiante.trim();
console.log(sin_espacios.length)

let contiene = estudiante.includes(`${nombre}`);
console.log(contiene);

