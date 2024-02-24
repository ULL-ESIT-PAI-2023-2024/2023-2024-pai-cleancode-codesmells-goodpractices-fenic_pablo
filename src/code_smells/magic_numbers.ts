/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jose Fenic Peiteado Padiila
 * @author Pablo Santana Gonzalez
 * @desc Example of magic numbers.
 * @see {@link}
 * @license GNU General Public License, version 3 (GPL-3.0)
 * @see {@link https://opensource.org/licenses/GPL-3.0}
 */

/**
 * Checks if the given password is correct for the system.
 * @param password The given password
 * @returns True if the password is admisible, false otherwise.
function validatePassword(password: string): boolean {
  if (password.length > 7) { // Realizing what is 7 is more difficult this way.
    return false;
  }
  return true; 
}
*/

/**
 * Checks if the given password is correct for the system.
 * @param password The given password
 * @returns True if the password is admisible, false otherwise.
*/
function validatePassword(password: string): boolean {
  const MAX_PASSWORD_LENGTH = 7;
  if (password.length > MAX_PASSWORD_LENGTH) { // Easier to understand.
    return false;
  }
  return true; 
}

