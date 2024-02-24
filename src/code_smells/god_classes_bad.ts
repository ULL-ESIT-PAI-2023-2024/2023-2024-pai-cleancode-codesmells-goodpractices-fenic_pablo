/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jose Fenic Peiteado Padiila
 * @author Pablo Santana Gonzalez
 * @desc Example of god classes with a customer that have many responsability
 * @see {@link }
 * @license GNU General Public License, version 3 (GPL-3.0)
 * @see {@link https://opensource.org/licenses/GPL-3.0}
 */
// God classes are classes that have too many responsibilities, and are usually
// very large. They are a bad practice, and should be avoided.

// This class example is about a customer, but it has too many responsibilities.
//  example address, name, email, phone, etc.

class Customer {
  constructor(
      private id: number, private name: string, private email: string,
      private phone: string, private city: string, private country: string,
      private postalCode: string) {}
    // This class has too many responsibilities, and should be avoided.
    public getAddress(): string {
      return this.city + ', ' + this.country + ', ' + this.postalCode;
    }
    public getLocalAddress(): string {
      return this.city + ', ' + this.postalCode;
    }
    public getId(): number {
      return this.id;
    }
    public getName(): string {
      return this.name;
    }   // ...
}

