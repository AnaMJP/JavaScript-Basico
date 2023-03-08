let altura_cm = 175;

let altura_m = 1.75;

let peso = 87.4;

let altura_round = altura_m.toFixed(1);
let altura_round3 = Math.round(altura_m);
console.log(altura_round);
console.log(altura_round3);

let peso_trunc = Math.trunc(peso);
console.log(peso_trunc);

let iguales = (Number.MAX_VALUE === Number.MAX_VALUE+1);
console.log(iguales);