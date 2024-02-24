/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jose Fenic Peiteado Padiila
 * @author Pablo Santana Gonzalez
 * @desc Example of refactoring a class that does too much.
 * @see {@link }
 * @license GNU General Public License, version 3 (GPL-3.0)
 * @see {@link https://opensource.org/licenses/GPL-3.0}
 */

type Product = {
  name: string;
  price: number;
}

class Shop {
  private products: Map<string, number>; // Name and price.
  private shopkeeperFirstName: string;
  private shopkeeperLastName: string;
  /**
   * Constructor
   * @param products A series of names of products with their respective prices.
   * @param shopkeeperFirstName The name of the shopkeeper.
   * @param shopkeeperLastName The last name of the shopkeeper.
   */
  constructor(products: Product[], shopkeeperFirstName: string, shopkeeperLastName: string) {
    for (let product of products) {
      this.addProduct(product.name, product.price);
    }
    this.shopkeeperFirstName = shopkeeperFirstName;
    this.shopkeeperLastName = shopkeeperLastName;
  }

  /**
   * Adds products to the shop
   * @param newProduct The name of the product
   * @param price The price of the product
   */
  addProduct(newProduct: string, price: number): void {
    this.products.set(newProduct, price);
  }

  /**
   * Get the shopkeeper's full name
   * @returns The shopkeeper's full name
   */
  getShopkeeperName(): string {
    return this.shopkeeperFirstName + ' ' + this.shopkeeperLastName;
  }

  /**
   * Calculates the value
   * @param products Name of the chosen products
   * @returns The total price of the products.
   */
  calculateShoppingBasketPrice(products: string[]): number {
    let totalPrice: number = 0;
    for (let [product, price] of this.products) {
      this.checkProductExistance(product);
      totalPrice += price;
    }
    return totalPrice;
  }

  /**
   * Checks for product existance and throws an error if it doesn't exist.
   * @param The name of the product.
   */
  private checkProductExistance(product: string): void {
    if (!this.products.has(product)) {
      throw new Error('Product does not exist');
    }
  }

}