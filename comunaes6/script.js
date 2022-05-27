class Comuna {
    constructor(nombre, poblacion) {
        this.nombre = nombre;
        this.poblacion = poblacion;
    }
    calcularCenso() {
        console.log('Calculando el censo del sector...');
    }
}

class Sector extends Comuna {
    constructor(nombre, poblacion, direccion) {
        super(nombre, poblacion);
        this.direccion = direccion;
    }
}

var centro = new Sector('Santiago', 2000000, 'Rebeca Matte 18');
console.log(centro.nombre);
console.log(centro.poblacion);
console.log(centro.direccion);
centro.calcularCenso();


