//--------------------- Promesas

// DB
const heroes = {
    'capi': {
        nombre: 'Capitan America',
        poder: 'Uso de inyecciones inmortales'
    },
    'iron': {
        nombre: 'Iron Man',
        poder: 'Money Money Money'
    }
}

// Promesa
const buscarHeroe = async (heroeId) => {
    const heroe = heroes[heroeId];

    if(heroe){
        return heroe;
    }else
        throw `El heroe con id ${heroeId} no existe`;
}


//--------------------- Llamado


const heroesId = ['capi', 'iron'];

// Forma tip1
const obtenerHeroesArr = async(heroes) => {

    const arr = [];

    for(const id of heroesId){
        arr.push(buscarHeroe(id));
    }

    return await Promise.all(arr);
}

// Forma tip2
const obtenerHeroesArrArrow = async() => {
    return await Promise.all(heroesId.map(buscarHeroe));
}

// Forma tip3 -> No recomendada ya que no se tiende a la primera
const obtenerHeroesArrArrowOneLine = async() => await Promise.all(heroesId.map(buscarHeroe));

//--------------------- Ejecucion

// obtenerHeroesArr().then(console.table);
// obtenerHeroesArrArrow().then(console.table);
obtenerHeroesArrArrowOneLine().then(console.table);