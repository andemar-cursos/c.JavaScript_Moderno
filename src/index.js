import './styles.css';

import { buscarHeroe, buscarHeroeAsync } from './js/promesas'

buscarHeroe('capi2')
    .then(console.log)
    .catch(console.warn);


buscarHeroeAsync('iron2')
    .then(console.log)
    .catch(console.warn);

