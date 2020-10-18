//Version vieja de la creacion de clases <ecma6

function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = function () {
        console.log(`nombre - ${this.nombre} ~~ edad - ${this.edad}`);
    };
}

const anderson = new Persona('anderson', '23');
anderson.imprimir();