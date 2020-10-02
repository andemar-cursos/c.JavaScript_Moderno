
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
        divCartasJugadores = document.querySelectorAll('.divCartas');


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

    //Turno: 0,1,2,3.. Jugador, ultimo computadora
    const acumularPuntos = (turno, carta) => {
        
        puntosJugadores[turno] += valorCarta(carta);
        sumaJugador[turno].innerText = puntosJugadores[turno];

        return puntosJugadores[turno];
    }

    // Jugador indicara la baraja del jugador a mostrar la carta
    const crearCarta = (jugador, carta) => {
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasJugadores[jugador].append(imgCarta);
    }


    const turnoComputadora = (puntosMinimos) => {

        let puntosComputadora = 0;

        do{

            const carta = pedirCarta();
            puntosComputadora = acumularPuntos(puntosJugadores.length-1, carta);
            crearCarta(puntosJugadores.length-1, carta);


        }while((puntosComputadora < puntosMinimos) &&
            (puntosMinimos <= 21));

        setTimeout(() => {
            if(puntosMinimos === puntosComputadora){
                    alert('Nadie gana');
                }else if(puntosMinimos > 21){
                    alert('Perdiste !!');
                }else if(puntosComputadora > 21){
                    alert('Ganaste !!');
                }else if(puntosComputadora > puntosMinimos){
                    alert('Perdiste !!');
                }else if(puntosMinimos > puntosComputadora){
                    alert('Ganaste !!');
                }else{
                    alert('Ganaste !!');
                }
        }, 20);
    }







    //Eventos
    btnPedir.addEventListener('click', () => {
        
        const carta = pedirCarta();
        const puntosJugador = acumularPuntos(0, carta);
        crearCarta(0, carta);

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
        // puntosJugador = 0;
        // puntosComputadora = 0;
        //sumaJugador[0].innerText = 0;
        //sumaJugador[1].innerText = 0;
        document.querySelectorAll('.carta').forEach(carta => carta.remove());
    });
})();