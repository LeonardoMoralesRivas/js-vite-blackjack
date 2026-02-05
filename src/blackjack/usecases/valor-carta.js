

/**
 * Obtiene el valor de la carta
 * @param {String} carta Ejemplo: 'A','1','7'.
 * @returns {Number} El valor(puntos) de la carta, 11:10.
 */

export const valorCarta = ( carta ) => {

    if (!carta) { throw new Error('Carta es obligatorio')};


    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}