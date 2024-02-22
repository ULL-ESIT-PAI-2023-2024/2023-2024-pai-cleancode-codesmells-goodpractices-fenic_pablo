/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jose Fenic Peiteado Padiila
 * @author Pablo Santana Gonzalez
 * @desc Example of code that's not applying DRY.
 * @see {@link }
 * @license GNU General Public License, version 3 (GPL-3.0)
 * @see {@link https://opensource.org/licenses/GPL-3.0}
 */

/**
 * Checks that the given arguments are correct.
 * @param arguments 
 */
function usage(arguments: string[]): void {
  for (let arg of arguments) {
    let argAsNumber = Number(arg);
    if (!Number.isInteger(argAsNumber) || argAsNumber < 0) {
      throw new Error(`${argAsNumber} is not a natural number`);
    }
  }
}

/**
 * Calculates the factorial of the given number
 * @param term The natural number we are going to calculate the factorial for.
 * @returns The factorial
 */
function factorial(term: number): number {
  if (!Number.isInteger(term) || term < 0) {
    throw new Error(`${term} is not a natural number`);
  }
  if (term === 0 || term === 1) {
    return 1;
  }
  let product = 1;
  for (let currentValue = 2; currentValue <= term; ++currentValue) {
    product *= currentValue;
  }
  return product;
}

/**
 * Notice how 'if (!Number.isInteger(argAsNumber) || argAsNumber < 0)' has appeared
 * twice with different variables in different functions. Occasionally this can
 * happen more times, and each time we write the same code to refer to the same thing,
 * we are more likely to make mistakes.
 * 
 * DRY (Don't Repeat Yourself) is a principle that states that every piece of a program
 * should have only one source.
 */