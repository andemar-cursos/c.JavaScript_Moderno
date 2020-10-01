
let deck        = [];
const tipos     = ['C', 'D', 'H', 'S'];
const specials  = ['A', 'J', 'Q', 'K'];

const crearDeck = () => {

    for(let i = 2; i < 11; i++) {
        for(let tipo of tipos) {
            deck.push(i + tipo);
        }
    }

    for(let tipo of tipos){
        for(let special of specials){
            deck.push(special + tipo);
        }
    }
    
    return deck;
}


crearDeck();