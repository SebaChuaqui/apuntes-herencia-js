class A{
    constructor(valor1){
        this.valor1 = valor1;
    }
}

class B extends A{
    constructor(valor2){
        this.valor2 = valor2;
    }
}

let obj1 = new B(4,5);
console.log(obj1);