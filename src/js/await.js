import {buscarHeroeAsync} from './promesas';

const heroesIds = ['capi', 'iron', 'spider'];


export const obtenerHeroesArr = async() => {

    const heroesArr = [];

    for(const id of heroesIds){
        const heroe = await buscarHeroeAsync(id);
        heroesArr.push(heroe);
    }
        

    return heroesArr;
};


export const obtenerHeroeAwait = async (heroeId) => {
    
    try {
        return await buscarHeroeAsync(heroeId);
    } catch (error) {
        console.log('Catch!!')
        // throw 'Mensaje de error';
        return {
            nombre: 'Sin nombre',
            poder:  'Sin poder',
        }
    }
}