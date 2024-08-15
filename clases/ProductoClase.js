class Producto {
    constructor(producto) {
        console.log("Producto recibido:", producto);
        if (producto.id) this.id = producto.id;
        if (producto.nombre) this.nombre = producto.nombre;
        if (producto.descripcion) this.descripcion = producto.descripcion;
        if (producto.precio) this.precio = producto.precio;
    }

    set id(id) {
        console.log("id antes de la validación:", id);
        this._id = id;
        console.log("id después de la validación");
    }

    set nombre(nombre) {
        console.log("Nombre antes de la validación:", nombre);
        var regexProducto = /^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]+$/;
        if (regexProducto.test(nombre)) {
            this._nombre = nombre;
            console.log("Nombre después de la validación:", this._nombre);
        }
    }

    set descripcion(descripcion) {
        this._descripcion = descripcion;
    }

    set precio(precio) {
        console.log("Precio antes de la validación:", precio);
        var regexPrecio = /^\d+(\.\d{1,2})?$/;
        if (regexPrecio.test(precio)) {
            this._precio = precio;
            console.log("Precio después de la validación:", this._precio);
        }
    }

    get id() {
        return this._id;
    }

    get nombre() {
        return this._nombre;
    }

    get descripcion() {
        return this._descripcion;
    }

    get precio() {
        return this._precio;
    }

    get obtenerProductos() {
        return {
            id: this.id,
            nombre: this.nombre,
            descripcion: this.descripcion,
            precio: this.precio,
        };
    }
}

module.exports = Producto;


