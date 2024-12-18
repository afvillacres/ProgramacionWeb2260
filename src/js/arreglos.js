

const arr = new Array(10);
const arr1=[];
console.log(arr);


const numeros = [1,2,3,4,5];
let colores = ["Rojo","Azul","Verde"]


let videoJuegos = ["Mario 3","Mega Man","Soccer"]
console.log(videoJuegos[0]);

let arregloCosas = [
    true,
    123,
    'Fernando',
    1 + 2,
    function(){},
    ()=>{},
    ['S', 'Peliculas']
];

console.log(arregloCosas);
console.log(arregloCosas[2])



let numerosMap = [1,2,3,4,5,6];
let cuadrados = numerosMap.map(num=> num * num);
console.log(cuadrados)

let numerosFilter = [1,2,3,4,5,6]
let pares = numerosFilter.filter(num=> num%2 == 0);
console.log(pares)

let numerosReduce  = [1,2,3,4,5,6,7,8,9,10]
let maximo = numerosReduce.reduce((acumular,num)=> (num>acumular ? num:acumular), numerosReduce[0]);
console.log(maximo)