/********************* Funciones **********************/

//Declarar funcion

function miFuncion(a, b, c){
    console.log(arguments.length);
    console.log('la suma es: ' + (a+b+c));
}

miFuncion(3,5,9);

//Regreso de valores

function miReturn(a,b){
    return a + b;
}

let resultado = miReturn(3,6);

console.log(resultado);

//Funcion tipo expresion

let multiplicar = function(a,b){return a*b};

resultado = multiplicar(2,7)
console.log(typeof multiplicar)
console.log(resultado);


// Funciones Self-Invoking
// Son funciones que se llaman a si mismas
// Funciones anonimas
// No son muy comunes pero pueden ser utiles en algunos casos

(function(a,b){
    console.log("Ejecucion "+(a+b));
    })(3,4);

/*setTimeout(function (){
    console.log('Hola desde una funcion anonima nueva');
},5000);*/


const persona = {
    nombre : 'Maxx',
    saludar(){
        return 'Hola, soy $(this.nombre)'; 
    },
    apellido: 'Myers'
}
console.log(persona.saludar());

const sumarValores = (x,y) => x+y;
console.log(sumarValores(2,7));

const operaciones = { sumar: (a,b) => a+b, resta: (a,b) => a-b, mult: (a,b) => a*b, div: (a,b) => a/b };
console.log(operaciones.sumar(2,3));
console.log(operaciones.resta(2,3));
console.log(operaciones.mult(2,3));
console.log(operaciones.div(2,3));

