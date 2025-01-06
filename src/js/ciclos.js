
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

/*Agregar elementos dentro de un array*/ 

// push() añade elementos al final de un arreglo

let p = [1,2,3,4]
p.push(5);
console.log(p);

// unshift() añade elementos al inicio de un arreglo

let u = ['a','b','c','d']
u.push('e');
console.log(u);

// splice() agrega o elimina elementos en cualquier posicion del arreglo

let s = [1,3,4,5]
s.splice(1,0,2);
console.log(s);

// Modificar elementos dentro de un array 
// Podemos acceder a un elemento directamente dentro por su indice y modificar

let w = ['Ana', 'Juan', 'Pedro','Martin']
w[3]='Marcelo';
console.log(w);

// map() crea un nueglo con los valores modificados
//let arregloMap= ['Azul', 'Amarillo', 'Rojo', 'Negro']
let arregloMap = [10, 23, 35, 26]
let arregloMapNew= arregloMap.map(num => num === 24 ? 5 : num);
console.log(arregloMapNew)

let arregloMapNew2= arregloMap.map(num => num === 23 ? 5 : num);
console.log(arregloMapNew2)

//splice()
let q = [1, 2, 3]
q.splice(1,1,6)
console.log(q);

//Eliminar
// pop() elimina el ultimo elemento de un array
let arregloColor= ['Azul', 'Amarillo', 'Rojo', 'Negro']
arregloColor.pop();
console.log(arregloColor);

// shift elimina el primer elemento de un array
let arregloColor2= ['Azul', 'Amarillo', 'Rojo', 'Negro']
arregloColor2.shift();
console.log(arregloColor2);

//splice() para eliminar cualquier elemento dentro de un arreglo
let arregloColor3= ['Azul', 'Amarillo', 'Rojo', 'Negro', 'Verde', 'Morado']
arregloColor3.splice(1,3);  //se declara la posicio y la cantidad de elementos
console.log(arregloColor3);

