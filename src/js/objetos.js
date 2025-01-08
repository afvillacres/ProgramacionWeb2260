/* Objetos en JS */

/*Caracteristicas importantes :
    Claves y valores: Las claves son cadenas o simbolos unicos y valores son cadenas, numeros, etc
    
    Dinamismo
    */


let persona ={
    nombre:'Juan',
    apellido: 'Perez',
    email: 'perez@gmail.com',
    edad: 35
}

console.log(persona);

//Inclir metodos

let peopele ={
    name:'Chespirito',
    lastname: 'Bolaños',
    edad: 34,
    fullName: function(){
        return this.name + ' '+ this.lastname
    }
}

console.log(peopele.fullName())

let peopele2 ={
    name:'Mary',
    lastname: 'Dalas',
    edad: 22,
    saludar: function(){
        console.log(`Hello, Im ${this.name}`);
    }
}
peopele2.saludar();


const persona1 = new Object();
persona1.nombre = 'Maria';
persona1.apellido = 'Valdez';
persona1.saludar = function(){
    console.log(`Hola, soy ${this.nombre}`);
}

persona1.saludar();


const prototipoPersona = {
    saludar: function(){
        console.log(`Hola, soy ${this.nombre}`);
    }
}

const persona2 = Object.create(prototipoPersona);
persona2.nombre = 'Jose Miguel de las Rosas';
persona2.saludar();


//Usando clases (introducido desde ES6 ===> ES2024) y proporciona una sintaxis mas estructurada para crear objetos

class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }

    saludar(){
        console.log(`Hola, soy ${this.nombre}`);
    }
}

const persona3 = new Persona('Ana','De Armas')

persona3.saludar();

function Persona1(nombre,edad,email){
    this.nombre = nombre;
    this.edad = edad

    this.saludar=function(){
        console.log(`Hola desde funciones, soy ${this.nombre}`);
    }
}

const persona4 = new Persona1('Luis',22);
persona4.saludar();

//Manipulacion de Objetos

//1. Agregar
const persona5 = {nombre: 'Manuel'};
persona5.edad= 34;
persona5.nombre = 'Perdro Marquez';
console.log(persona5);

//delete persona5.edad;

console.log(persona5)

for (nombrePropiedad in persona5) {
    console.log(nombrePropiedad);
    console.log(persona5[nombrePropiedad]);
}

for(let clave in persona5){
    console.log(`${clave}:${persona5[clave]}`);
}

console.log('email' in persona5)
console.log('nombre' in persona5);

console.log(persona5.hasOwnProperty('edad'));

//Metodos Utiles para trabajar con objetos
//1. Object.keys() da un array con las claves del objeto

console.log(Object.keys(persona5));

//2. Object.values() da un array con los valores del objeto

console.log(Object.values(persona5));

//3. Object.entries() da un array con las claves y valores del objeto

console.log(Object.entries(persona5));

//4. Object.assing() copia las propiedades de un objeto a otro

const copia = Object.assign({},persona5);
console.log(copia)

//5. Object.frezze()  congela un objeto para evitar ser modificado

Object.freeze(persona5);
console.log(persona5);

// 6. Object.seal() permite modificar propieades existentes, pero no agrega ni elimina las ya existentes

Object.seal(persona5);
delete persona5.nombre;

console.log(persona5);

let personaArray = Object.values(persona5);
console.log(personaArray);

let personaString = JSON.stringify(persona5);
console.log(personaString);


