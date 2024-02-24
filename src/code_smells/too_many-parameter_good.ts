/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jose Fenic Peiteado Padiila
 * @author Pablo Santana Gonzalez
 * @desc Example of too many parameters good.
 * @see {@link}
 * @license GNU General Public License, version 3 (GPL-3.0)
 * @see {@link https://opensource.org/licenses/GPL-3.0}
 */


// MenuOptions is an object that contains the parameters of the menu
type MenuOptions = { title: string, body: string, buttonText: string, cancellable: boolean };

/**
 * Create a menu with the given parameters
 * @param options the parameters of the menu
*/
function createMenu(options: MenuOptions) {
  // ...
}


// Usage
createMenu({
  title: 'Foo',
  body: 'Bar',
  buttonText: 'Baz',
  cancellable: true
});