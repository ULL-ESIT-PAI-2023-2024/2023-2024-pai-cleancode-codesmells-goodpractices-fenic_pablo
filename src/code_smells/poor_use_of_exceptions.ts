/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jose Fenic Peiteado Padiila
 * @author Pablo Santana Gonzalez
 * @desc Example of undefined variables.
 * @see {@link}
 * @license GNU General Public License, version 3 (GPL-3.0)
 * @see {@link https://opensource.org/licenses/GPL-3.0}
 */

/**
 * Calculates factorial.
 * @param limit The natural number we are going to calculate the factorial for.
 * @returns The factorial of the given number.
 */
function factorial(limit: number): number {
  let product = 1;
  if (limit <= 1) {
    return product;
  }
  for (let currentTerm = 2; currentTerm <= limit; currentTerm++) {
    product *= currentTerm;
  };
  return product;
}

console.log(factorial(-10));  // Prints '1', which shouldn't happen.

/**
 * Calculates factorial checking for correct value input.
 * @param limit The natural number we are going to calculate the factorial for.
 * @returns The factorial of the given number.
 */
function factorialWithValueChecking(limit: number): number {
  if (!Number.isInteger(limit) || limit < 0) {
    throw new Error('Invalid value for factorial');
  }
  let product = 1;
  if (limit <= 1) {
    return product;
  }
  for (let currentTerm = 2; currentTerm <= limit; currentTerm++) {
    product *= currentTerm;
  };
  return product;  
}

try {
  console.log(factorialWithValueChecking(-10));
} catch (exception) {
  console.error(exception); // The exception will be printed, there's no unexpected behaviour.
}