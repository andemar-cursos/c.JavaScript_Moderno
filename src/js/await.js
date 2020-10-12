import {buscarHeroe, buscarHeroeAsync} from './promesas';

const heroesIds = ['capi', 'iron', 'spider'];
const heroesPromesas = heroesIds.map(buscarHeroe);

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


export const heroesCiclo = async () => {

    console.time('heroesCiclo');
    
    // const heroes = await Promise.all(heroesPromesas);
    // heroes.forEach(console.log);
    for await(const heroe of heroesPromesas){
        console.log(heroe);
    }


    console.timeEnd('heroesCiclo');

}


export const heroesIf = async () => {

    if( await heroesPromesas[0]){
        console.log('Resolvio el if');
    }else
        console.log('No resolvio el if');
}