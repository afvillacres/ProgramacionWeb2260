//Sistema de ventas

class Producto {
    static contadorProductos = 0;
    static inventario = [];

    constructor(nombre, precio, categoria, stock) {
        this._idProducto = ++Producto.contadorProductos; // Preincremento
        this._nombre = nombre;
        this._precio = precio;
        this._categoria = categoria;
        this._stock = stock;
        Producto.inventario.push(this); // Agregar al inventario global, bueno aqui es aplicar a una misma categoria y no de orden en orden o 
    }

    get idProducto() {
        return this._idProducto;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get precio() {
        return this._precio;
    }

    set precio(precio) {
        this._precio = precio;
    }

    getCategoria() {
        return this._categoria;
    }

    getStock() {
        return this._stock;
    }

    setStock(stock) {
        this._stock = stock;
    }

    static aplicarDescuentoPorCategoria(categoria, porcentajeDescuento) {
        for (const producto of Producto.inventario) {
            if (producto.getCategoria() === categoria) {
                const descuento = producto.precio * (porcentajeDescuento / 100);
                producto.precio -= descuento;
                console.log(`Descuento aplicado al producto ${producto.nombre} de la categoría ${categoria}. Nuevo precio: ${producto.precio}`);
            }
        }
    }

    static mostrarProductosDisponibles() {
        console.log("Productos disponibles en el inventario:");
        for (const producto of Producto.inventario) {
            if (producto.getStock() > 0) {
                console.log(`ID: ${producto.idProducto}, Nombre: ${producto.nombre}, Precio: ${producto.precio}, Categoría: ${producto.getCategoria()}, Stock: ${producto.getStock()}`);
            }
        }
    }

    toString() {
        return `Producto [ID: ${this._idProducto}, Nombre: ${this._nombre}, Precio: ${this._precio}, Categoría: ${this._categoria}, Stock: ${this._stock}]`;
    }
}

class Orden {
    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS() {
        return 5;
    }

    constructor() {
        this.idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
    }

    get inOrden() {
        return this._idOrden;
    }

    agregarProducto(producto) {
        if (this._productos.length < Orden.MAX_PRODUCTOS) {
            if (producto.getStock() > 0) {
                this._productos.push(producto);
                producto.setStock(producto.getStock() - 1); // Reducir el stock del producto
                console.log(
                    `Producto agregado: ${producto.nombre}. Stock restante: ${producto.getStock()}`
                );
            } else {
                console.log(
                    `El producto ${producto.nombre} no tiene stock disponible.`
                );
            }
        } else {
            console.log("No se pueden agregar más productos a la orden.");
        }
    }

    calcularTotal() {
        let totalVenta = 0;
        for (const producto of this._productos) {
            totalVenta += producto.precio; // Total de los productos
        }
        const impuesto = totalVenta * 0.16; // Calcular impuesto
        return totalVenta + impuesto; // Total con impuesto incluido
    }

    mostrarOrden() {
        let productosOrden = "";
        for (const producto of this._productos) {
            productosOrden += "\n{" + producto.toString() + "}";
        }
        console.log(
            `Orden: ${this.idOrden}, Total (con impuesto): ${this.calcularTotal()}, Productos: ${productosOrden}`
        );
    }
}

// Crear un nuevo producto
let producto1 = new Producto("Laptop", 500, "Portatiles", 15);
let producto2 = new Producto("Mouse", 10, "Inalambricos", 3);
let producto3 = new Producto("Teclado", 30, "NoInalambricos", 16);
let producto4 = new Producto("Auriculares", 20, "Inalambricos", 14);
let producto5 = new Producto("Microfono", 15, "NoInalambricos", 0);

// Mostrar productos disponibles
Producto.mostrarProductosDisponibles();// mas que nada es para ver los cambios en el invetario de productos

// Aplicar descuento global a una categoría
Producto.aplicarDescuentoPorCategoria("Inalambricos", 15);

// Crear una nueva orden y agregar productos
let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.agregarProducto(producto3);
orden1.mostrarOrden();

// Crear otra orden y agregar más productos
let orden2 = new Orden();
orden2.agregarProducto(producto4);
orden2.agregarProducto(producto5); // Producto sin stock, no se agregará
orden2.mostrarOrden();
Producto.mostrarProductosDisponibles();


/*Modificador STATIC se utiliza para acceder directamente a travez de la clase
Las propiedades o metodos STATIC no requiere que se creen que se creen una instancia de la clase para ser utilizados

class Calculadora {
    //metodo STATIC
    static sumar(a,b){
        return a+b;
    }
}
El acceso al metodo STATIC diractamente de la clase es así
console.log(Calculadora.sumar(5,3));

No se puede acceder desde una instancia

const cal = new Calculadora();
console.log(cal.sumar(5,3));

el modificador STATIC en JS es una herrmaienta clave para definir funciones y 
propiedades compartidas sin la necesidad de crear alun tipo de instancia de una clase*/

