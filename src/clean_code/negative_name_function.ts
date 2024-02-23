/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jose Fenic Peiteado Padiila
 * @author Pablo Santana Gonzalez
 * @desc Example of applying DRY.
 * @see {@link }
 * @license GNU General Public License, version 3 (GPL-3.0)
 * @see {@link https://opensource.org/licenses/GPL-3.0}
 */


/**
 * Checks is number is not a natural number.
 * @param possibleNatural Number to check if it is not a natural number.
 * @returns  True if it is not a natural number, false otherwise.
 */
function IsNotANaturalNumber(possibleNatural): boolean {
  if (!Number.isInteger(possibleNatural) || possibleNatural < 0) {
    return true;
  }
  return false;
}

/**
 * Checks that number is a natural number.
 * @param possibleNatural number to check if it is a natural number.
 * @returns True if it is a natural number, false otherwise.
 */
function isANaturalNumber(possibleNatural): boolean {
  if (!Number.isInteger(possibleNatural) || possibleNatural < 0) {
    return false;
  }
  return true;
}
