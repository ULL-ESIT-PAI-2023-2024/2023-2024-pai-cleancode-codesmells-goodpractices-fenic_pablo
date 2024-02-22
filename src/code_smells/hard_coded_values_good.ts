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

// One value of pi for every function.
const PI = 3.14;

/**
 * Calculates the circumference of a circle 
 * @param diameter The diameter of the circle.
 * @returns The circumference
 */
function calculateCircumference(diameter): number {
  return diameter * PI;
}

/**
 * Prints the value of the number pi.
 */
function printPiValue(): void {
  console.log(PI);
}