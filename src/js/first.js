var nombre="Ricardo";
var edad;
edad=25;
var apellido ="Vargas";
console.log("Mi nombre es "+ nombre + " " + apellido);
console.log("Mi edad es "+ edad);
console.log("Mi nombre es "+ nombre + " " + apellido + " " + "y tengo "+ edad);

let x =10;
let y =20;
let z = x + y;
console.log(z);

//tipos de datos string
//var=> underprecated
//let=> moderno
//constant=< moderno

//Ejemplos de tipo de datos string
//1)
let nombrePersona="Ricardo";
console.log(nombre);
//2)
let nombrePersona1;
nombrePersona1="Ricardo";
console.log(nombrePersona1);

//Tipos de datos numericos
let numero=1000;
console.log(numero);

//Tipos de datos Objetos Object
let persona={nombre:"Ricardo", apellido:"Vargas",edad:25}

console.log(persona);

//Tipo de dato typeof
let let1="Ricardo";
console.log(typeof let1);

let let2=23;
console.log(typeof let2);

let let3=false;
console.log(typeof let3);

let let4 = BigInt(123);
console.log(typeof let4);

let let5 = [1,2,3,4,5,6,7,8,9];
console.log(typeof let5);


//tipos de nfuncion

function saludar(){}
console.log(typeof saludar);

let simbolo = Symbol("mi simbolo");
console.log(typeof simbolo);

class Persona {
    constructor(nombres, apellidos, edad){
        this.nombres=nombres;
        this.apellidos=nombres;
        this.nombres=nombres;
    }
}

console.log(typeof Persona);

let variable;
console.log(variable);
console.log(typeof variable);

let variable1=null;
console.log(variable1);
console.log(typeof variable1);

let autos=["BMW","Mercedez Benz","Audi"];
console.log(typeof autos);
console.log(autos);

let cadVcia="";
console.log(typeof cadVcia);
console.log(cadVcia);


let nombresCompletos ="Ricarde vargas";
let nombres_completos ="Ricarde vargas";
let nombresCompletos_ ="Ricarde vargas";

//operaciones
let numero1=3;
let numero2=2;
console.log(numero1+numero2);
console.log(numero1-numero2);
console.log(numero1*numero2);
console.log(numero1/numero2);
console.log(numero1%numero2);

//(++) incremento y (--) decremento

let numero3=3, numero4=2;
let numero5= numero3+numero4;
console.log(numero5);


//preincremento
numero5=++numero3;
console.log(numero3);
console.log(numero5);
//postincremento
numero5=numero4++;
console.log(numero4);
console.log(numero5);

//predecremento
numero5=--numero3;
console.log(numero3);
console.log(numero5);
//postdecremento
numero5=numero4--;
console.log(numero4);
console.log(numero5);

//presedencia de operadores

let pre1 = 2, pre2 = 3, pre3 = 4, pre4 = 5;

let pre5= (pre1+pre2)*pre3;
console.log(pre5);

let pre6= pre3*(pre1+pre2);
console.log(pre6);

let pre7= pre3*(pre1+pre2);
console.log(pre7);



let op1 = 3, op2=2;
op1 += op2;
console.log(op1);
op1 -= op2;
console.log(op1);


let op3 = 3, op4 = "3";

let op10 = op3 == op4;

console.log(op10);


let op11 = op3 === op4;

console.log(op11);


if(op3 == op4){
    console.log("son iguales");
}else{
    console.log("no son iguales")
}

if(op3 === op4){
    console.log("son iguales");
}else{
    console.log("no son iguales")
}

let num = 3; 

if (num % 2 === 1) { 
    console.log("El número es impar");
} else { 
    console.log("El número es par");
}


let per = 18; 

if (per >= 18) { 
    console.log("Es mayor de edad");
} else { 
    console.log("Es menor de edad");
}

let lista = [12, 13 , 14 , 15 , 16 , 18 , 19 , 20 , 14 , 22], imp = 0 , par = 0;

for (let i = 0; i < lista.length; i++) {
    if (lista[i] % 2 === 0) {
        par++;
    } else {
        imp++;
    }
}

console.log("Números pares: " + par);
console.log("Números impares: " + imp);

//and, or, not
let s=8;

let valMin = 5, valMax = 9;

if(s >= valMin && s <= valMax){
    console.log("El valor esta dentro del rango");
}else{
    console.log("El valor esta fuera del rango");
}

if(s >= valMin || s <= valMax){
    console.log("El valor esta dentro del rango");
}else{
    console.log("El valor esta fuera del rango");
}


let resultado  = (s >= valMin && s <= valMax)? "El valor esta dentro del rango" : "El valor no esta dentro del rango"
console.log(resultado);

let minumero = "20";
console.log(typeof minumero);

let minumero2 = Number(minumero);
console.log(typeof minumero2);
console.log(minumero2);

let minumero3 = parseInt(minumero);
console.log(typeof minumero3);
console.log(minumero3);


console.log(parseInt("42px"));
console.log(parseInt(3.14156));
console.log(parseInt("1abc"));

console.log(Number("42px"));
console.log(Number("3.141516"));
console.log(Number("1abc"));

console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
console.log(Number(undefined));
console.log(parseFloat("4.555"));

if(isNaN(minumero2)){
    console.log("No es un numero");
}else{
    console.log("En efecto mi estimado, es un numero :D");
}

console.log(isNaN(minumero2));
console.log(minumero2);

if(parseFloat(minumero2)){
    console.log("No es un numero decimal");
}else{
    console.log("En efecto mi estimado, es un numero decimal :D");
}

if(undefined==minumero2){
    console.log("No es un numero definido");
}else{
    console.log("En efecto mi estimado, es un numero definido :D");
}