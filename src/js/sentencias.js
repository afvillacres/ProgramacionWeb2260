let numero=3;

if(numero == 1){
    console.log("Numero 1")
}else if(numero == 2){
    console.warn("Numero 2");
}else if(numero == 3){
    console.warn("Numero 3");
}else{
    console.log("No es un numero")
}

/*

let mes = 4;
let estacion;

if (mes == 1 || mes == 2 || mes == 3) {
    estacion = "Invierno";
} else if (mes == 4 || mes == 5 || mes == 6) {
    estacion = "Primavera";
} else if (mes == 7 || mes == 8 || mes == 9) {
    estacion = "Verano";
} else if (mes == 10 || mes == 11 || mes == 12) {
    estacion = "Otoño";
} else {
    estacion = "no corresponde a una estación";
}
console.warn(estacion);

*/


let horaDia= 12;
let mensaje;

if(horaDia>=6 && horaDia<=11){
    mensaje="buenos dias";
}else if(horaDia>=12 && horaDia<=18){
    mensaje="buenas tardes";
}else if(horaDia>=19 && horaDia<=23){
    mensaje="buenos noches";
}else if(horaDia>=0 && horaDia<=4){
    mensaje="durmiendo";
}
console.warn(mensaje);


let mesE = 11;
let estacionE = "Estacion desconocida";

switch(mesE){
    case 1: case 2: case 3:
        estacionE='Invierno';
    case 4: case 5: case 6:
        estacionE='Primavera';
    case 7: case 8: case 9:
        estacionE='Verano';
    case 10: case 11: case 12:
        estacionE='Otoño';
        break;
    default:
        estacion = 'Valor Incorrecto';
}
console.warn(estacionE);

let mes = 4;
let estacion;

if (mes == 1 || mes == 2 || mes == 3) 
    estacion = "Invierno";
else if (mes == 4 || mes == 5 || mes == 6) 
    estacion = "Primavera";
else if (mes == 7 || mes == 8 || mes == 9) 
    estacion = "Verano";
else if (mes == 10 || mes == 11 || mes == 12)
    estacion = "Otoño";
else
    estacion = "no corresponde a una estación";

console.warn(estacion);