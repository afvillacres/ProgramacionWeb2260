/*Tienes un arreglo de objetos donde cada objeto representa a un estudiante (10 estudiantes) con 
su nombre y las calificaciones obtenidas en varios exámenes.*/



let estudiantes = [
    { nombre: "Marta", calificaciones: [17, 13, 9] }, { nombre: "Jaime", calificaciones: [14, 13, 15] },
    { nombre: "Pedro", calificaciones: [13, 16, 29] }, { nombre: "Martin", calificaciones: [20, 11, 19] },
    { nombre: "Stephen", calificaciones: [17, 16, 12] },  { nombre: "Alfonso", calificaciones: [12, 13, 14] },
    { nombre: "Alisson", calificaciones: [16, 14, 18] }, { nombre: "Jessy", calificaciones: [11, 10, 12] },
    { nombre: "Walter", calificaciones: [19, 18, 15] }, { nombre: "Saul", calificaciones: [17, 16, 15] }];

/*Clasificación por calificación: Al clasificar a los estudiantes, si su promedio es:

Mayor o igual a 16, clasificar como "Excelente".
Mayor o igual a 12 pero menor a 16, clasificar como "Bueno".
Mayor o igual a 8 pero menor a 12, clasificar como "Aprobado".
Menor a 8, clasificar como "Reprobado".*/

let mejorEstudiante = estudiantes[0];
let peorEstudiante = estudiantes[0];
let contador = 1;

for (let estudiante of estudiantes) {
    let suma = 0;

    for (let calificacion of estudiante.calificaciones) {
        suma += calificacion;
    }
    let promedio = suma / 3;

    let clasificacion;
    if (promedio >= 16) {
        clasificacion = "Excelente";
    } else if (promedio >= 12) {
        clasificacion = "Bueno";
    } else if (promedio >= 8) {
        clasificacion = "Aprobado";
    } else {
        clasificacion = "Reprobado";
    }
    /*Cálculos estadísticos:

    Calcular el promedio de cada estudiante.
    Determinar el máximo y mínimo de las calificaciones de cada estudiante.*/

    let maxima = estudiante.calificaciones[0];
    let minima = estudiante.calificaciones[0];
    for (let calificacion of estudiante.calificaciones) {
        if (calificacion > maxima) {
            maxima = calificacion;
        }
        if (calificacion < minima) {
            minima = calificacion;
        }
    }
    /*Imprimir los resultados:
    Mostrar las calificaciones, clasificaciones y estadísticas de los estudiantes.*/

    console.log("Estudiante " + contador);
    console.log("Nombre: " + estudiante.nombre);
    console.log("Calificaciones: "+estudiante.calificaciones);
    console.log("Clasificación: " + clasificacion);
    console.log("Promedio: " + promedio);
    console.log("Nota Máxima: " + maxima);
    console.log("Nota Mínima: " + minima);
    console.log("");

    contador++;
    
    /*
    Encontrar el estudiante con el peor promedio.
    Encontrar el estudiante con el mejor promedio. */

    let promedioPeor = 0;
    for (let calificacion of peorEstudiante.calificaciones) {
        promedioPeor += calificacion;
    }
    promedioPeor /= peorEstudiante.calificaciones.length;

    let promedioMejor = 0;
    for (let calificacion of mejorEstudiante.calificaciones) {
        promedioMejor += calificacion;
    }
    promedioMejor /= mejorEstudiante.calificaciones.length;

    if (promedio < promedioPeor) {
        peorEstudiante = estudiante;
    }
    if (promedio > promedioMejor) {
        mejorEstudiante = estudiante;
    }

}

let sumaMejor = 0;
for (let calificacion of mejorEstudiante.calificaciones) {
    sumaMejor += calificacion;
}
let promedioFinalMejor = sumaMejor / mejorEstudiante.calificaciones.length;

let sumaPeor = 0;
for (let calificacion of peorEstudiante.calificaciones) {
    sumaPeor += calificacion;
}
let promedioFinalPeor = sumaPeor / peorEstudiante.calificaciones.length;

console.log("Mejor estudiante es: " + mejorEstudiante.nombre + " con un promedio de " + promedioFinalMejor);
console.log("Peor estudiante es: " + peorEstudiante.nombre + " con un promedio de " + promedioFinalPeor);







