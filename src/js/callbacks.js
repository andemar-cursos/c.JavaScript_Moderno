const heroes = {
    capi: {
        nombre: 'capitan america',
        poder: 'Aguantar inyecciones sin morir'
    },
    iron: {
        nombre: 'Iron Man',
        poder: 'Absurda cantidad de dinero'
    },
    Spider: {
        nombre: 'Spider Man',
        poder: 'La mejor reaccion alergica a las picaduras de aranas'
    }
};

export const buscarHeroe = (heroeId, callback) => {

    const heroe = heroes[heroeId];

    callback(heroe);
};