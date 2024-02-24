/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jose Fenic Peiteado Padiila
 * @author Pablo Santana Gonzalez
 * @desc Example of refactoring. Substituting an algorithm
 * @see {@link https://exercism.org/tracks/typescript/exercises/roman-numerals}
 * @license GNU General Public License, version 3 (GPL-3.0)
 * @see {@link https://opensource.org/licenses/GPL-3.0}
 */

/**
 * Throws an exception if the given number can't be translated into Roman Numeral
 * @param insertedNumber The number we want to check if it can be translated.
 */
function checkParams(insertedNumber: number): void {
  if (!Number.isInteger(insertedNumber) || insertedNumber <= 0) {
    throw new Error('Only positive integers can be converted to roman numerals');
  }
  if (insertedNumber > 3999) {
    throw new Error('The maximum number that can be converted to roman numerals is 3999');
  } 
}


/**
 * Function that transforms positive integers into roman numerals
 * @param insertedNumber 
 * @return The given positive integer as a roman numeral.
 */
export const toRoman = (insertedNumber: number): string => {
  checkParams(insertedNumber);
  const NUMBERS: number[] = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const ROMAN_NUMBERS: string[] = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let romanNumber = '';
  for (let currentIndex in NUMBERS) {
    if (insertedNumber >= NUMBERS[currentIndex]) {
      let numberOfInserts = Math.trunc(insertedNumber / NUMBERS[currentIndex]);
      romanNumber += ROMAN_NUMBERS[currentIndex].repeat(numberOfInserts);
      insertedNumber -= (numberOfInserts * NUMBERS[currentIndex]);
    }
  }
  return romanNumber;
};