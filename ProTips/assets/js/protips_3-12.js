
//-----------------------------------------------------------------------
//----------------Creacion de objeto normal------------------------------------

function crearPersona(nombre, apellido) {
    return {nombre, apellido}
}

const crearPersonaOneLine = (nombre, apellido) => ({nombre, apellido});

console.log(crearPersona('anderson', 'martinez'));
console.log(crearPersonaOneLine('anderson', 'martinez'));

//Se customiza el nombre de las variables del objeto
//que llega por return
const {nombre:nickname, apellido:lastName} = crearPersonaOneLine('mashiro', 'kurata');
console.log({nickname, lastName});

//-----------------------------------------------------------------------
//----------------Imprimir argumentos------------------------------------

//Como es una funcion, se crea un valor
//arguments que contiene todos los args enviados
function printArguments(){
    console.log(arguments);
}

//Solo retorna mashiro, debido a que 10 se almacena
//en una variable aparte (edad);
const printArgumentsOneLine = (edad, ...args) => args;

printArguments(10, 'mashiro', 'morfonica');
console.log(printArgumentsOneLine(10, 'mashiro', 'morfonica' ));


//Se pueden crear directamente variables con los valores
//retornados por la funcion.
const [nombre, banda] = printArgumentsOneLine(10, 'mashiro', 'morfonica');
console.log({nombre, banda});

//-----------------------------------------------------------------------
//-----------------------------------------------------------------------

const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster']
};

const printProperties = ( personaje ) => {
    console.log( 'nombre', personaje.nombre);
    console.log( 'codeName', personaje.codeName);
    console.log( 'vivo', personaje.vivo);
    console.log( 'edad', personaje.edad);
    console.log( 'trajes', personaje.trajes);
}

//Se pueden obtener las variables del objeto y asignarela
//valores por default si no tiene valor.
const printPropertiesOnLine = ({ nombre, codeName, vivo, edad = 15, trajes}) => {
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

printProperties(tony)
printPropertiesOnLine(tony)