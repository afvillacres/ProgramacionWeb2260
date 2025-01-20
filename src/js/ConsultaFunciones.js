function saludo(nombre, callback) {
    console.log("Hola, " + nombre);
    callback();
}

// Esta es la función callback que se pasa como argumento
function despedida() {
    console.log("Adiós!");
}

// Llamamos a la función saludo y pasamos la función 
// despedida como callback
saludo("Juan", despedida);




// setInterval

// Inicia el intervalo
let intervaloID = setInterval(function() {
    console.log("Este mensaje aparece cada 2 segundos");
}, 2000);

// Detén el intervalo después de 6 segundos
setTimeout(function() {
    clearInterval(intervaloID);
    console.log("El intervalo ha sido detenido");
}, 6000);



