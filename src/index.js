import { obtenerHeroeAwait, obtenerHeroesArr } from './js/await';
import './styles.css';

console.time('await');

// obtenerHeroesArr().then(console.table);
obtenerHeroeAwait('iron2')
    .then(heroe => {
        console.table(heroe);
        console.timeEnd('await');
    
    }).catch(err => {
        console.log(err);
    });