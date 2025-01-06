/* Ejercicio 2 */
/* Crear una funcion llamada calcularPromedio que reciba 3 numeros y retorne su promedio */

function calculaPromedio(a, b, c) {
    return (a + b + c) / 3;
}

/* Declarar una funcion expresada llamada determinarMayor que reciba dos numeros como parametros y retorne el mayor*/

function determinarMayor(a, b) {
    if (a > b) return a;
    else return b;
}

/* Escribir una funcion flecha llamada esPar que reciba un numero y retorne true si es numero par o false si no lo es */

const esPar = (x) => x % 2 == 0;

/* Funcion de validacion con mensaje descriptivo */

function validar(a,b,c){
    let tipo=typeof(a);
    let tipo1=typeof(b);
    let tipo2=typeof(c);
    if (tipo === 'number' && tipo1 === 'number' && tipo2 === 'number') {
        return true;
    }else{
        console.log('Parece que un dato no es numerico, mi amigo :"c ');
    } 
}

/* Funcion para llmar las funciones */

const llamarFunciones = function () {
    let a = 2;
    //let b ='a';
    let b = 7;
    let c = 10;

    if(validar(a,b,c)){
        let promedio= calculaPromedio(a, b, c);
        let mayor= determinarMayor(a, b);
        let par= esPar(c);
        
        console.log("Promedio: "+ promedio);
        console.log("Mayor: "+ mayor);
        console.log("Paridad de "+ a +": "+ par);
    }
};

/* Llamdo a la funcion para llamar*/

llamarFunciones();