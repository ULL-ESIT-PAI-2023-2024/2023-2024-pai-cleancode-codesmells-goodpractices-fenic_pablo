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
 * 
 * The function isANaturalNumber is the only piece of code in charge
 * of checking if a number is natural.
 */

/**
 * Checks that the given arguments are correct.
 * @param arguments 
 */
let product;


function usage(arguments: string[]): void {
  for (let arg of arguments) {
    let argAsNumber = Number(arg);
    if (!isANaturalNumber(argAsNumber)) {
      throw new Error(`${argAsNumber} is not a natural number`);
    }
  }
}

function factorial(term: number): number {
  if (!isANaturalNumber(term)) {
    throw new Error(`${term} is not a natural number`);
  }
  //...
  return product;
}

/**
 * Calculates the factorial of the given number
 * @param term The natural number we are going to calculate the factorial for.
 * @returns The factorial
*/

/**
 * Checks if the given number is a natural number.
 * @param possibleNatural The number we are going to check.
 * @returns True if it is a natural number, false otherwise.
 */
function isANaturalNumber(possibleNatural): boolean {
  if (!Number.isInteger(possibleNatural) || possibleNatural < 0) {
    return false;
  }
  return true;
}