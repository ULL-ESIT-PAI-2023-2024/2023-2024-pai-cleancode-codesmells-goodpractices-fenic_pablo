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
 * Sum two numbers
 * @param firstValue number
 * @param secondValue  number
 * @returns the sum of a and b
 */
function sum(firstValue, secondValue) {
    return firstValue + secondValue;
}
var knownValue = 5;
var unknownValue;
var result = sum(knownValue, unknownValue);
console.log(result);
