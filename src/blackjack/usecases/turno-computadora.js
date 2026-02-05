import { crearCartaHTML, pedirCarta, valorCarta } from './';
import Swal from 'sweetalert2';
/**
 * 
 * @param {Number} puntosMinimos Puntos minimos que la computadora necesita para ganar.
 * @param {HTMLElement} puntosHTML elemento HTML para mostrar los puntos
 * @param {Array<String>} deck 
 */

export const turnoComputadora = ( puntosMinimos,puntosHTML,divCartasComputadora, deck = [] ) => {

    if (!puntosMinimos) {throw new Error('Puntos minimos son necesario')}
    if (!puntosHTML) {throw new Error('PuntosHTML son necesario')}
    if (!divCartasComputadora) {throw new Error('divCartasComputadora es necesario')}

    let puntosComputadora = 0;


    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = crearCartaHTML(carta);
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            Swal.fire({
                title: 'Empate',
                text: 'Nadie gana',
                icon: 'question',
                theme: 'dark'
            })
        } else if ( puntosMinimos > 21 ) {
            Swal.fire({
            title: 'CPU Gana',
            text: 'menso',
            icon: 'error',
            theme: 'dark'
            });
        } else if( puntosComputadora > 21 ) {
            Swal.fire({
                title: 'Ganaste',
                text: 'eres pro',
                icon: 'success',
                theme: 'dark'
            })
        } else {
            Swal.fire({
            title: 'CPU Gana',
            text: 'menso',
            icon: 'error',
            theme: 'dark'
            });
        }
    }, 100 );
}