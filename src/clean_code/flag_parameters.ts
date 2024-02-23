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
 * 
 * The function isANaturalNumber is the only piece of code in charge
 * of checking if a number is natural.
 */
let fs;

/**
 * create a file in the system 
 * @param name string with the name of the file
 * @param temp boolean if the file is temporary or not
 */
function createFile(name: string, temp: boolean) {
  if (temp) {
    fs.create(`./temp/${name}`);
  } else {
    fs.create(name);
  }
}


