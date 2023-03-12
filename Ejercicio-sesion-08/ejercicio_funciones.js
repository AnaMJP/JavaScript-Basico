function verdadero(){
    return true;
}

console.log(verdadero());

function asincrona(){
    //Funcion asincrona
}

const promesa = new Promise((resolve, reject) => {
    const time = setTimeout(() => { resolve() }, 5000);
})

promesa
    .then(() => console.log("Hola soy una promesa"));

function* idPar(){
    let id = 0;
    while(true){
        yield id;
        id += 2;
    }
}

const gen = idPar();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
