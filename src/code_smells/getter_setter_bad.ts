/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jose Fenic Peiteado Padiila
 * @author Pablo Santana Gonzalez
 * @desc Example of class only with getters and setters. This is a bad practice.
 * @see {@link }
 * @license GNU General Public License, version 3 (GPL-3.0)
 * @see {@link https://opensource.org/licenses/GPL-3.0}
 */

// This is a bad practice, we should avoid using only getters and setters.
class Point {
  constructor(private x: number,private y: number) {
    this.x = x;
    this.y = y;
  }
  // Only getters and setters ? Bad practice.
  public getX() {
    return this.x;
  }

  public setX(x: number) {
    this.x = x;
  }
  // More getters and setters.
}

