const yo = {
    nombre: "Ana",
    apellido: "Jimenez",
    edad: 22,
    altura: 175,
    isDeveloper: true
};

const miEdad = yo.edad;
console.log(miEdad);

const amigo1 = {
    nombre: "Jaquline",
    apellido: "Everton",
    edad: 21,
    altura: 170,
    isDeveloper: false
};

const amigo2 = {
    nombre: "Javier",
    apellido: "Padilla",
    edad: 23,
    altura: 175,
    isDeveloper: true
};

const nosotros = [yo, amigo1, amigo2];
console.log(nosotros);

const orden = nosotros.sort((a, b)=> b.edad-a.edad);
console.log(orden);