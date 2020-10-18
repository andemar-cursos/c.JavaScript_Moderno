//Nueva forma de la creacion de clases

class Persona {

    static _conteo = 0;
    static get getConteo() {
        return Persona._conteo + ' instancias';
    }

    static mensaje() {
        console.log('Mensaje desde static');
    }

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

        Persona._conteo++;
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
        // console.log(`Soy ${this.nombre}, pero en el bajo mundo soy ${this.codigo}`);
    }

    miFrase(){
        this.quienSoy();
        // console.log(`${this.frase} Mi frase`);
    }
}


const spiderman = new Persona('Peter Parker', 'Spiderman', 'Arana !!');
//spiderman.quienSoy();
spiderman.miFrase();
spiderman.setComidaFravorita = 'El pie de cereza de la tia May';
// console.log(spiderman.getComidaFavorita);


// console.log(`Conteo de clase persona -> ${Persona._conteo}`);
console.log(Persona.getConteo);
Persona.mensaje();