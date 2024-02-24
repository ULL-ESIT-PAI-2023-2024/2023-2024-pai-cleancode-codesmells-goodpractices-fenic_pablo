/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jose Fenic Peiteado Padiila
 * @author Pablo Santana Gonzalez
 * @desc Example of hard-coded values. Solution
 * @see {@link }
 * @license GNU General Public License, version 3 (GPL-3.0)
 * @see {@link https://opensource.org/licenses/GPL-3.0}
 */

// A constant that acts as a single source for the max length of a password.
const MAX_PASSWORD_LENGTH = 7;

/**
 * Checks if the given password is correct for the system.
 * @param password The given password
 * @returns True if the password is admisible, false otherwise.
*/
function validatePassword(password: string): boolean {
  if (password.length > MAX_PASSWORD_LENGTH) {
    return false;
  }
  return true; 
}

/**
 * Imagine that there's a lot of code here.
 * Lots and lots of code. Because '7' (the max password length) is hard-coded,
 * if we refer to the max password length in another piece of code we would have
 * and we wanted to change it we would have to remember where we used it.
 */

/**
 * Generates a password made out of numbers.
 * @returns The password.
 */
function generatePassword(): string {
  let password = '';
  for (let currentDigit = 0; currentDigit < MAX_PASSWORD_LENGTH; ++currentDigit) {
    password += String(currentDigit);
  }
  return password;
}