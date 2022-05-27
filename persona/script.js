var persona1 = {
    nombre : "Petra",
    apellido : "Perez",
}

persona1.nombreCompleto = function(){
    return this.nombre + " " + this.apellido
}

var persona2 = Object.create(persona1);

console.log(persona1.nombreCompleto());
console.log(persona2.nombreCompleto());

persona2.nombre = "Juan";
persona2.apellido = "Faundez";

persona2.nombreCompleto = function(){
    return this.nombre + " " + this.apellido
}

console.log(persona1.nombreCompleto());
console.log(persona2.nombreCompleto());
