class Animal {
    constructor(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
}

class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre);
        this._raza = raza;
    }
    get raza() {
        return this._raza;
    }
    set raza(raza) {
        this._raza = raza;
    }
};

let registrar = document.getElementById('registrar');
registrar.addEventListener('click', observando);

function registrando() {
    let nombre = document.getElementById("nombre").value;
    let raza = document.getElementById("raza").value;
    var perrito = new Perro(nombre);
    return perrito;
}

function observando() {
    const perroData = registrando();
    const nombre = perroData.nombre;
    const raza = perroData.raza;
    const data = document.getElementById('data');
    const p = document.createElement('p');
    p.innerHTML = `🐶 Nombre: ${nombre} - Raza: ${raza}`;
    data.appendChild(p);
    document.getElementById('nombre').value = '';
    document.getElementById('raza').value = '';
}



