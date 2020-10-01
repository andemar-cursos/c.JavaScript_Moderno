
let deck        = [];
const tipos     = ['C', 'D', 'H', 'S'];
const specials  = ['A', 'J', 'Q', 'K'];

//Funcion para crear baraja
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

    deck = _.shuffle(deck);

    return deck;
}

//Esta funcion me permite tomar una carta
const pedirCarta = () => {
    
    let carta = '';

    if(deck.length >= 1){
        // carta = deck.pop();
        carta = deck.splice(0, 1);
    }
    else{
        throw 'No hay cartas en el deck';
    }
    
    return carta;
}


crearDeck();
console.log(deck);
console.log(pedirCarta());
console.log(deck);