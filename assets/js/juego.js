
(() => {
    'use strict'

    //Variables
    let deck        = [];
    const tipos     = ['C', 'D', 'H', 'S'];
    const specials  = ['A', 'J', 'Q', 'K'];
    let puntosJugador     = 0;
    let puntosComputadora = 0;

    //Html
    const btnPedir          = document.querySelector('#btnPedir');
    const btnDetener        = document.querySelector('#btnDetener');
    const btnNuevo          = document.querySelector('#btnNuevo');
    const sumaJugador       = document.querySelectorAll('small');
    const divCartasJugador  = document.querySelector('#jugador-cartas');
    const divCartasComput   = document.querySelector('#computadora-cartas');


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
            //carta = deck.splice(0, 1); Se cambio, debido a que retornaba un array.
            carta = deck.shift();
        }
        else{
            throw 'No hay cartas en el deck';
        }
        
        return carta;
    }


    const valorCarta = (carta) => {

        const valor = carta.substring(0, carta.length-1);

        return ( isNaN(valor) )  ?
               ( valor === 'A' ) ? 11 : 10
               : valor * 1;
    }


    const turnoComputadora = (puntosMinimos) => {

        do{

            const carta = pedirCarta();

            puntosComputadora += valorCarta(carta);
            sumaJugador[1].innerText = puntosComputadora;
        
            const imgCarta = document.createElement('img');
            imgCarta.src = `assets/cartas/${carta}.png`;
            imgCarta.classList.add('carta');
            divCartasComput.append(imgCarta);  

        }while((puntosComputadora < puntosMinimos) &&
            (puntosMinimos <= 21));

        setTimeout(() => {
            if(puntosJugador === puntosComputadora){
                    alert('Nadie gana');
                }else if(puntosJugador > 21){
                    alert('Perdiste !!');
                }else if(puntosComputadora > 21){
                    alert('Ganaste !!');
                }else if(puntosComputadora > puntosJugador){
                    alert('Perdiste !!');
                }else if(puntosJugador > puntosComputadora){
                    alert('Ganaste !!');
                }else{
                    alert('Ganaste !!');
                }
        }, 20);
    }







    //Inicio del programa

    crearDeck();

    //Eventos
    btnPedir.addEventListener('click', () => {
        
        const carta = pedirCarta();

        puntosJugador += valorCarta(carta);
        sumaJugador[0].innerText = puntosJugador;

        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasJugador.append(imgCarta);

        if(puntosJugador > 21) {
            console.warn('Perdiste :P');
            btnPedir.disabled   = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        } else if(puntosJugador === 21) {
            console.warn('21, e.e');
            btnPedir.disabled   = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        }
    });


    btnDetener.addEventListener('click', () => {

        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    });

    btnNuevo.addEventListener('click',() => {

        btnDetener.disabled = false;
        btnPedir.disabled = false;
        puntosJugador = 0;
        puntosComputadora = 0;
        sumaJugador[0].innerText = 0;
        sumaJugador[1].innerText = 0;
        document.querySelectorAll('.carta').forEach(carta => carta.remove());
        crearDeck();
    });
})();