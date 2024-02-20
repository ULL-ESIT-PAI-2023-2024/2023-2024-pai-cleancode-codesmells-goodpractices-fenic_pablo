/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jose Fenic Peiteado Padiila
 * @author Pablo Santana Gonzalez
 * @desc This Contains diferrents way for to better our develope function
 * @see {@link }
 * @license GNU General Public License, version 3 (GPL-3.0)
 * @see {@link https://opensource.org/licenses/GPL-3.0}
 */



// Example that have many arguments
// Dificult the testing
function createMenu(title: string, body: string, buttonText: string, cancellable: boolean) {
    // ...
}

createMenu('Foo', 'Bar', 'Baz', true);


// Option That bette, why is better?
function createMenu(options: { title: string, body: string, buttonText: string, cancellable: boolean }) {
}
  
  createMenu({
    title: 'Foo',
    body: 'Bar',
    buttonText: 'Baz',
    cancellable: true
  });