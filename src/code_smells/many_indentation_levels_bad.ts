/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jose Fenic Peiteado Padiila
 * @author Pablo Santana Gonzalez
 * @desc Example of various indentation levels.
 * @see {@link }
 * @license GNU General Public License, version 3 (GPL-3.0)
 * @see {@link https://opensource.org/licenses/GPL-3.0}
 */

let aNumber = 4;
if (aNumber < 10) {
  if (aNumber > 3) {
    if (Number.isInteger(aNumber)) { // Three levels of indentation. Should check if it can be rewritten.
      console.log(aNumber);
    }
  }
}

