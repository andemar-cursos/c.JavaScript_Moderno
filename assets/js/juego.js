
(() => {
    'use strict'

    //Variables
    let deck        = [],
        puntosJugadores = [];


    const tipos     = ['C', 'D', 'H', 'S'],
        specials  = ['A', 'J', 'Q', 'K'];

    //Html
    const btnPedir         = document.querySelector('#btnPedir'),
        btnDetener       = document.querySelector('#btnDetener'),
        btnNuevo         = document.querySelector('#btnNuevo'),
        sumaJugador      = document.querySelectorAll('small'),
        divCartasJugador = document.querySelector('#jugador-cartas'),
        divCartasComput  = document.querySelector('#computadora-cartas');


    //Esta funcion inicializa el juego
    const inicializarJuego = ( numJugadores = 2) => {
        deck = crearDeck();

        for(let i = 0; i < numJugadores; i++){
            puntosJugadores[i] = 0;
        }
    }

    //Funcion para crear baraja
    const crearDeck = () => {

        deck = [];

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
        return _.shuffle(deck);
    }

    //Esta funcion me permite tomar una carta
    const pedirCarta = () => {

        if(deck.length === 0)
            throw 'No hay cartas en el deck';
            
        return deck.shift();;
    }


    const valorCarta = (carta) => {

        const valor = carta.substring(0, carta.length-1);

        return  ( isNaN(valor) )  ?
                ( valor === 'A' ) ? 11 : 10
                : valor * 1;
    }

    const aumularPuntos = () => {

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

            btnPedir.disabled   = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        } else if(puntosJugador === 21) {

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

        inicializarJuego();

        btnDetener.disabled = false;
        btnPedir.disabled = false;
        puntosJugador = 0;
        puntosComputadora = 0;
        sumaJugador[0].innerText = 0;
        sumaJugador[1].innerText = 0;
        document.querySelectorAll('.carta').forEach(carta => carta.remove());
    });
})();