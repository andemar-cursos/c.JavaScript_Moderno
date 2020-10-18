const heroes = {
    capi: {
        nombre: 'capitan america',
        poder: 'Aguantar inyecciones sin morir'
    },
    iron: {
        nombre: 'Iron Man',
        poder: 'Absurda cantidad de dinero'
    },
    spider: {
        nombre: 'Spider Man',
        poder: 'La mejor reaccion alergica a las picaduras de aranas'
    }
};

export const buscarHeroe = (heroeId) => {
    const heroe = heroes[heroeId]
    
    return new Promise((resolve, reject) => {

        (heroe)
            ? resolve(heroe)
            : reject(`No existe un heroe con el id ${heroeId}`);
    });

}

export const buscarHeroeAsync = async (heroeId) => {
    const heroe = heroes[heroeId]
    
    if (heroe){
        return heroe;
    }else
        throw `No existe un heroe con el id ${heroeId}`;
        //o throw Error (`no exis.....`); para info mas detallada
}


const promesaLenta = new Promise((resolve, reject) => {
    setTimeout(() => { resolve(`Promesa Lenta`) }, 2000)
});
const promesaMedia = new Promise((resolve, reject) => {
    setTimeout(() => { resolve(`Promesa Media`) }, 1500)
});
const promesaRapida = new Promise((resolve, reject) => {
    setTimeout(() => { resolve(`Promesa Rapida`) }, 1000)
});

export {
    promesaLenta,
    promesaMedia,
    promesaRapida
}