var objA = {
    nombre: "Juan",
    saludar: function(){
        console.log("Hola soy " + this.nombre);
    }
}

var objA = Object.create(objA);
var objA = Object.create(objA);
objA.saludar();

