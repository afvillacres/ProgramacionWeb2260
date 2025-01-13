
class Conductor {
    #licencia;
    constructor(nombre, licencia) {
        this.nombre = nombre;
        this.#licencia = licencia;
        this.ruta = [];
    }
    
    registrarRuta(ruta) {
        this.ruta.push(ruta);
        console.log(`Ruta registrada para ${this.nombre}: ${this.ruta}`);
    }

    obtenerLicencia() {
        return this.#licencia;
    }
}

class ConductorVIP extends Conductor {
    constructor(nombre, licencia) {
        super(nombre, licencia);
        this.vehiculoPreferido = null;
    }

    asignarVehiculoPreferido(vehiculo) {
        this.vehiculoPreferido = vehiculo;
        console.log(`${this.nombre} tiene asignado el vehículo preferido: ${vehiculo.modelo}`);
    }
}

class Vehiculo {
    constructor(modelo, placa) {
        this.modelo = modelo;
        this.placa = placa;
        this.asignado = false;
    }

    asignar() {
        this.asignado = true;
        console.log(`Vehículo ${this.modelo} con placa ${this.placa} asignado.`);
    }

    liberar() {
        this.asignado = false;
        console.log(`Vehículo ${this.modelo} con placa ${this.placa} liberado.`);
    }
}


class Ruta {
    constructor(puntoInicio, destino, duracionEstimada) {
        this.puntoInicio = puntoInicio;
        this.destino = destino;
        this.duracionEstimada = duracionEstimada;
    }

    mostrarDetalles() {
        console.log(`Ruta: ${this.puntoInicio} -> ${this.destino}, Duración: ${this.duracionEstimada} minutos`);
    }
}


const conductor1 = new Conductor("Juanito Alimaña", "12345ABC");
conductor1.registrarRuta("Latacunga a Aeropuerto");

const conductorVIP = new ConductorVIP("Martha Roberts", "67890XYZ");

const vehiculo1 = new Vehiculo("Toyota Azul", "XYZ-123");
const ruta1 = new Ruta("Latacunga", "Aeropuerto", 123);

conductorVIP.asignarVehiculoPreferido(vehiculo1);
vehiculo1.asignar();
ruta1.mostrarDetalles();