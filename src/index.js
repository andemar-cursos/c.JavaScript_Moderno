import { buscarHeroe as buscarHeroeCallback } from './js/callbacks';
import { buscarHeroe } from './js/promesas';
import './styles.css';

const heroeId1 = 'capi';
const heroeId2 = 'spider';

// Se llama la funcion con primer parametro el 
// id y segundo la funcion callback que se
// ejecutara al momento de obtener la data.
// buscarHeroe(heroeId1    , (err, heroe1) => {

//     if (err) {return console.error(err)};

//     // Muchos llamados callback al interior de estos
//     // = Callback Hell
//     buscarHeroe(heroeId2, (err, heroe2) => {

//         (err)
//         ? console.error(err)
//         : console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la mision`);
//     });
        
// });


// PROMISE HELL
// buscarHeroe(heroeId1).then(heroe1 => {
//     buscarHeroe(heroeId2).then(heroe2 => {
//         console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la mision`);
//     })
// })


Promise.all([buscarHeroe(heroeId1), buscarHeroe(heroeId2)])
        // Desestructuracion de arreglos
        .then( ([heroe1, heroe2]) => {
            
            console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la mision`);
});

console.log('Fin del programa')