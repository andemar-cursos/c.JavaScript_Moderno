//Nueva forma de la creacion de clases

class Persona {

    //Atributos
    nombre;
    codigo;
    frase;

    constructor(nombre, codigo, frase) {
        if(!nombre || !codigo || !frase) throw Error('Se necesitan los atributos');

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }
}


const spiderman = new Persona('peter parker', 'Spiderman', 'Arana !!');