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
        console.log(`Soy ${this.nombre}, pero en el bajo mundo soy ${this.codigo}`);
    }

    miFrase(){
        this.quienSoy();
        // console.log(`${this.frase} Mi frase`);
    }
}

class Heroe extends Persona{
    //Atributos
    clan;
    
    //Constructos
    constructor(nombre, codigo, frase, clan){
        super(nombre, codigo, frase);
        this.clan = clan;
    }

    //Metodos
    quienSoy() {
        console.log('2do quien soy');
        super.quienSoy();
    }
}

// const spiderman = new Persona('Peter Parker', 'Spiderman', 'Arana !!');
const spiderman = new Heroe('Peter Parker', 'Spiderman', 'Arana !!', 'avengers e,e');

console.log(spiderman);
spiderman.quienSoy();