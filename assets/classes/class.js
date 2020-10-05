//Nueva forma de la creacion de clases

class Persona {

    //Atributos
    nombre;
    codigo;
    frase;
    comida;

    //Constructor
    constructor(nombre, codigo, frase) {
        if(!nombre || !codigo || !frase) throw Error('Se necesitan los atributos');

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }

    //Set&Get
    set setComidaFravorita(comida){
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita() {
        return this.comida;
    }

    //Metodos
    quienSoy(){
        console.log(`Soy ${this.nombre}, pero en el bajo mundo soy ${this.codigo}`);
    }

    miFrase(){
        this.quienSoy();
        console.log(`${this.frase} Mi frase`);
    }
}


const spiderman = new Persona('Peter Parker', 'Spiderman', 'Arana !!');
//spiderman.quienSoy();
spiderman.miFrase();
spiderman.setComidaFravorita = 'El pie de cereza de la tia May';
console.log(spiderman.getComidaFavorita);
