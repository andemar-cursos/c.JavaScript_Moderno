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