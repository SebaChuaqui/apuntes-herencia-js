function Comuna(nombre, poblacion) {
    this.nombre = nombre;
    this.poblacion = poblacion;
};
Comuna.prototype.calcularCenso = function () {
    console.log('Calculando el censo del sector...');
};

function Sector(nombre, poblacion, direccion) {
    Comuna.call(this, nombre, poblacion);
    this.direccion = direccion;
};

Sector.prototype = Object.create(Comuna.prototype);
Sector.prototype.constructor = Sector;

// instancia del objeto
var centro = new Sector('Santiago', 3000000, 'Rebeca Matte 18');
// llamada a método y propiedades
console.log(centro.nombre);
console.log(centro.poblacion);
console.log(centro.direccion);
centro.calcularCenso();

