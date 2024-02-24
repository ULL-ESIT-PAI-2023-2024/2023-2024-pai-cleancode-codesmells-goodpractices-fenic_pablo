/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jose Fenic Peiteado Padiila
 * @author Pablo Santana Gonzalez
 * @desc Example of god classes. Solution
 * @see {@link }
 * @license GNU General Public License, version 3 (GPL-3.0)
 * @see {@link https://opensource.org/licenses/GPL-3.0}
 */

// Divide the class into two.
class Address {
  constructor(private city: string, private country: string, private postalCode: string) {}
  
  // Method that returns the full address.
  public getAddress(): string {
    return this.city + ', ' + this.country + ', ' + this.postalCode;
  }
  
  // Method that return only postal code and city.
  public getLocalAddress(): string {
    return this.city + ', ' + this.postalCode;
  }
}

/*class Customer {
  constructor(
      private id: number, private name: string, private email: string,
      private phone: string, private address: Address) {}
    
  public getId(): number {
    return this.id;
  }
  public getAddress(): Address {
    return this.address;
  }
}

