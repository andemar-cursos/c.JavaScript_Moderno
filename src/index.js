import './styles.css';

import { promesaLenta, promesaMedia, promesaRapida } from './js/promesas'

// promesaLenta.then(console.log);
// promesaMedia.then(console.log);
// promesaRapida.then(console.log);

// Se resuelve la priemra promesa que haya sido resulta
Promise.race([promesaLenta, promesaMedia, promesaRapida])
       .then(console.log)
       .catch(console.warn);