/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jose Fenic Peiteado Padiila
 * @author Pablo Santana Gonzalez
 * @desc Example of variables with hard coded values.
 * @see {@link }
 * @license GNU General Public License, version 3 (GPL-3.0)
 * @see {@link https://opensource.org/licenses/GPL-3.0}
 */

/**
 * Checks if the given password is correct for the system.
 * @param password The given password
 * @returns True if the password is admisible, false otherwise.
*/
function validatePassword(password: string): boolean {
  if (password.length > 7) { // Max password length is 7.
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
  // Notice how the password is going to be 8 characters, won't be valid.
  for (let currentDigit = 0; currentDigit < 8; ++currentDigit) {
    password += String(currentDigit);
  }
  return password;
}