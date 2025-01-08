class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

let prod1 = new Producto("Té Frutos Rojos", 3.50, 100);
let prod2 = new Producto("Galletas Navidad", 2.00, 50);
let prod3 = new Producto("NesCafe", 2.00, 150);
let prod4 = new Producto("Cereales", 8.00, 50);
let prod5 = new Producto("Pasta", 4.00, 40);

const inventario = Object.freeze({
    prod1, prod2, prod3, prod4, prod5
});

function vender(nombre, cantidad) {
    let producto = inventario[nombre];

    if (producto.cantidad>=cantidad) {
        producto.cantidad-=cantidad;
        console.log(`Se vendio ${cantidad} de ${producto.nombre}.`);
    } else {
        console.log(`Su pedido excede la cantidad de ${producto.nombre} en stock`);
    }
}

function aplicarDescuento(porcentaje) {
    if (porcentaje >= 100) {
        console.log("No se puede exceder el límite de descuento");
    } else {
        for (let key in inventario) {
            let prodAux = inventario[key];
            let precioOriginal = prodAux.precio;
            let descuento = precioOriginal * (porcentaje / 100);
            prodAux.precio = precioOriginal - descuento;
            console.log(`Precio original: ${precioOriginal}$, Precio con descuento: ${prodAux.precio}$`);
        }
    }
}

vender("prod1", 70);
vender("prod2", 12);
vender("prod3", 6);
vender("prod4", 50);
vender("prod4", 50);
console.log(' ');
aplicarDescuento(10);
console.log(' ');
console.log("Inventario final:");
for (let key in inventario) {
    let producto = inventario[key];
    console.log(`${producto.nombre}: Precio ${producto.precio}$, Cantidad ${producto.cantidad}`);
}