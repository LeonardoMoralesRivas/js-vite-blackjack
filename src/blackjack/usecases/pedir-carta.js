

/**
 * Verifica si existen cartas y saca una del deck
 * @param {Array<string>} deck Proviene de crearDeck
 * @returns {String} Retorna una carta del deck
 */

export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
   
    const carta = deck.pop();
    return carta;
}