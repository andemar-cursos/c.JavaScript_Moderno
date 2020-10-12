import { buscarHeroe } from './js/callbacks';
import './styles.css';

const heroeId = 'capi';

// Se llama la funcion con primer parametro el 
// id y segundo la funcion callback que se
// ejecutara al momento de obtener la data.
buscarHeroe(heroeId, (heroe) => {
    console.log({heroe});
});

