
const heroes= ["Batman","Superman","Wonder Woman","Aquaman"];

console.warn("Forma tradicional")//contol total de los indices del array
for (let i=0; i < heroes.length;i++ ){
    console.warn(heroes[i])
}

console.warn("For in")//para manejo de objetos, iterar un objeto de los inices
for (let i in heroes){
    console.warn(heroes[i])
}

console.warn("For of")//para manejar directamente de un iterable (array)
for (let heroe of heroes){
    console.warn(heroe)
}


for (let contador =0; contador < 10; contador++){
    if (contador % 2 == 0){
        continue;
    }
    console.log(contador);
}

const carros =['Ford','Mazda','Honda','Toyota'];
for (let contador =0;contador < carros.length; contador++){
    if (contador == 2){
        continue;
    }
    console.log(carros[contador]);
}

let i = 0;

while (i < carros.length) {
    console.log(carros[i]);
    i++;
}

console.warn('usando continue');

while (carros[i]) {
    if (i === 1) {
        i++;
        continue;
    }
    console.log(carros[i]);
    i++;
}