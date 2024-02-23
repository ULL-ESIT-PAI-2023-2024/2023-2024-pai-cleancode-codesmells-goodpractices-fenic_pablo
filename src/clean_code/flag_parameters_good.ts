/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jose Fenic Peiteado Padiila
 * @author Pablo Santana Gonzalez
 * @desc Flag parameters are a bad practice, they make the code harder to read and understand.
 * @see {@link }
 * @license GNU General Public License, version 3 (GPL-3.0)
 * @see {@link https://opensource.org/licenses/GPL-3.0}
 */
let fs;

/**
 * create a file in the system temporary
 * @param name name of the file
 */
function createTempFile(name: string) {
  createFile(`./temp/${name}`);
}
 /**
  * create a file in the system
  * @param name name of the file
  */
function createFile(name: string) {
  fs.create(name);
}


