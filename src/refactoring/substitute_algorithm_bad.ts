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
 * Function that transforms positive integers into roman numerals. This is an example of a way too long function.
 * @param insertedNumber 
 * @return The given positive integer as a roman numeral.
 */
export const toRoman = (insertedNumber: number): string => {
  if (!Number.isInteger(insertedNumber) || insertedNumber <= 0) {
    throw new Error('Only positive integers can be converted to roman numerals');
  }
  if (insertedNumber > 3999) {
    throw new Error('The maximum number that can be converted to roman numerals is 3999');
  }
  let romanNumber = '';
  if (insertedNumber > 1000) {
    let numberOfInserts = Math.trunc(insertedNumber / 1000);
    romanNumber += 'M'.repeat(numberOfInserts);
    insertedNumber -= (numberOfInserts * 1000);
  }

  if (insertedNumber > 900) {
    let numberOfInserts = Math.trunc(insertedNumber / 900);
    romanNumber += 'CM'.repeat(numberOfInserts);
    insertedNumber -= (numberOfInserts * 900);
  }

  if (insertedNumber > 500) {
    let numberOfInserts = Math.trunc(insertedNumber / 500);
    romanNumber += 'D'.repeat(numberOfInserts);
    insertedNumber -= (numberOfInserts * 500);
  }

  if (insertedNumber > 400) {
    let numberOfInserts = Math.trunc(insertedNumber / 400);
    romanNumber += 'CD'.repeat(numberOfInserts);
    insertedNumber -= (numberOfInserts * 400);
  }

  if (insertedNumber > 100) {
    let numberOfInserts = Math.trunc(insertedNumber / 100);
    romanNumber += 'C'.repeat(numberOfInserts);
    insertedNumber -= (numberOfInserts * 100);
  }

  if (insertedNumber > 90) {
    let numberOfInserts = Math.trunc(insertedNumber / 90);
    romanNumber += 'XC'.repeat(numberOfInserts);
    insertedNumber -= (numberOfInserts * 90);
  }

  if (insertedNumber > 50) {
    let numberOfInserts = Math.trunc(insertedNumber / 50);
    romanNumber += 'L'.repeat(numberOfInserts);
    insertedNumber -= (numberOfInserts * 50);
  }

  if (insertedNumber > 40) {
    let numberOfInserts = Math.trunc(insertedNumber / 40);
    romanNumber += 'XL'.repeat(numberOfInserts);
    insertedNumber -= (numberOfInserts * 40);
  }

  if (insertedNumber > 10) {
    let numberOfInserts = Math.trunc(insertedNumber / 10);
    romanNumber += 'X'.repeat(numberOfInserts);
    insertedNumber -= (numberOfInserts * 10);
  }

  if (insertedNumber > 9) {
    let numberOfInserts = Math.trunc(insertedNumber / 9);
    romanNumber += 'IX'.repeat(numberOfInserts);
    insertedNumber -= (numberOfInserts * 9);
  }

  if (insertedNumber > 5) {
    let numberOfInserts = Math.trunc(insertedNumber / 5);
    romanNumber += 'V'.repeat(numberOfInserts);
    insertedNumber -= (numberOfInserts * 5);
  }

  if (insertedNumber > 4) {
    let numberOfInserts = Math.trunc(insertedNumber / 4);
    romanNumber += 'IV'.repeat(numberOfInserts);
    insertedNumber -= (numberOfInserts * 4);
  }

  if (insertedNumber > 1) {
    let numberOfInserts = Math.trunc(insertedNumber / 1);
    romanNumber += 'I'.repeat(numberOfInserts);
    insertedNumber -= (numberOfInserts * 1);
  }
  return romanNumber;
};

/**
 * Reasons why this code is bad:
 * 1. The functions does two things: checks parameters and translates numbers into roman numerals.
 * 2. The function is really long, harder to read.
 * 3. DRY principle is not followed. More chances of making mistakes.
 * 
 * Look at each piece of code and what it does. Try to simplify it.
 * Write another function that does the same thing and try running the same tests.
 * Tests passed? Delete the old algorithm.
 * Tests don't pass? Look at which tests fail and look how the old algorithm resolves them.
 */