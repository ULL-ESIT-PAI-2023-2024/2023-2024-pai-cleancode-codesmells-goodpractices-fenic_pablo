/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jose Fenic Peiteado Padiila
 * @author Pablo Santana Gonzalez
 * @desc Example of applying DRY.
 * @see {@link }
 * @license GNU General Public License, version 3 (GPL-3.0)
 * @see {@link https://opensource.org/licenses/GPL-3.0}
 */


class UserULL {
  constructor(
      private name: string, private email: string, private password: string,
      private dateOfBirth: Date) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.dateOfBirth = dateOfBirth;
  }
  // Wait, in this moment we need it?
  setName(name: string) {
    this.name = name;
  }
  // Can be changed BirthDay?
  setDateOfBirth(dateOfBirth: Date) {
    this.dateOfBirth = dateOfBirth;
  }  //....
  setEmail(email: string) {
    this.email = email;
  }
  setPassword(password: string) {
    this.password = password;
  }
}

// instance of the class

let user1 =
    new UserULL('Pablo', 'pablo@gmail.com', '1234', new Date('1999-01-01'));