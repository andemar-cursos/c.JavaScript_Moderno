import { obtenerHeroesArr } from './js/await';
import './styles.css';


obtenerHeroesArr().then(console.table);