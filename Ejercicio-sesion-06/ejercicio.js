const listaCompra = ["tomate", "huevos", "brocoli", "pollo", "pescado"];
listaCompra.push("Aceite de Girasol");
console.log(listaCompra);

const peliculas = [
    {titulo: "La Monja", director: "Corin Hardy", fecha: new Date("September 7 2018")},
    {titulo: "Hora punta", director: "Brett Ratner", fecha: new Date("September 18 1998")},
    {titulo: "Shrek", director: "Vicky Jenson", fecha: new Date("May 10 2001")}
]

const recientes = peliculas.filter(peli => peli.fecha.getFullYear() > 2010);
console.log(recientes);

const directores = peliculas.map(peli => peli.director);
console.log(directores);

const titulos = peliculas.map(peli => peli.titulo);
console.log(titulos);

const concatenar = directores.concat(titulos);
console.log(concatenar);
const propagacion = [...directores, ...titulos];
console.log(propagacion);

