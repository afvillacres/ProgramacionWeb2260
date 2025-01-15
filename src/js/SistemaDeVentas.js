//Sistema de ventas

class Producto{
    static contadorProductos = 0;
    
    constructor(nombre, precio, categoria, stock){
        this._idProducto = ++Producto.contadorProductos;//Preincrementos= primero aumenta y luego asigna
        this._nombre = nombre;
        this._precio = precio;
        this._categoria = categoria;
        this._stock = stock;
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

    toString() {
        return `Producto [ID: ${this._idProducto}, Nombre: ${this._nombre}, Precio: ${this._precio}, Categoria: ${this._categoria}]`;
    }
}


class Orden{
    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this.idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        this._contadorProductosAgregados = 0;
    }

    get inOrden(){
        return this._idOrden;
    }

    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            if (producto.getStock() > 0) {
                this._productos.push(producto);
                producto.setStock(producto.getStock() - 1); // Reducir el stock del producto
                console.log(`Producto agregado: ${producto.nombre}. Stock restante: ${producto.getStock()}`);
            } else {
                console.log(`No hay suficiente stock para agregar el producto ${producto.nombre}`);
            }
        } else {
            //indica que no se pueden agregar mas productos a La Orden
            console.log('No se pueden agregar mas productos a la orden :c');
        }
    }

    calcularTotal(){
        let totalVenta = 0;
        for(const producto of this._productos){
            totalVenta += producto._precio;  // totalVenta = totalVenta + producto.precio;
        }
        return totalVenta;
    }

    calcularImpuesto() {
        return this.calcularTotal() * 0.16;
    }

    aplicarDescuento(categoria, porcentajeDescuento) {
        for (const producto of this._productos) {
            if (producto.getCategoria() === categoria) {
                // Aplica el descuento en el precio del producto
                const descuento = producto.precio * (porcentajeDescuento / 100);
                producto.precio -= descuento;
                console.log(`Descuento aplicado al producto ${producto.nombre} de la categoría ${categoria}. Nuevo precio: ${producto.precio}`);
            }
        }
    }

    mostrarOrden() {
        let productosOrden = '';
        for (const producto of this._productos) {
            productosOrden += '\n{' + producto.toString() + '}';
        }
        console.log(`Orden: ${this.idOrden}, Total: ${this.calcularTotal()}, Productos: ${productosOrden}`);
    }
}

// Crear un nuevo producto
let producto1 = new Producto('Laptop', 500, 'Portatiles', 15);
let producto2 = new Producto('Mouse', 10, 'Inalambricos', 3);

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.mostrarOrden();

let producto3 = new Producto('Teclado', 30, 'NoInalambricos', 16);
let producto4 = new Producto('Auriculares', 20, 'Inalambricos',14);
let producto5 = new Producto('Microfono', 15, 'NoInalambricos', 3);

let orden2 = new Orden();
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto5);
orden2.agregarProducto(producto5);
orden2.agregarProducto(producto4);

orden1.aplicarDescuento('Inalambricos', 10);

orden2.mostrarOrden();

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

