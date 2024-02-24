/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jose Fenic Peiteado Padiila
 * @author Pablo Santana Gonzalez
 * @desc Example of various indentation levels. Solution.
 * @see {@link }
 * @license GNU General Public License, version 3 (GPL-3.0)
 * @see {@link https://opensource.org/licenses/GPL-3.0}
 */

class Employee {
  constructor(private readonly name: string, private readonly email: string) {}

  number() {
    return this.name;
  }

  

}

// Bad because Employees "have" tax data. EmployeeTaxData is not a type of
// Employee
class EmployeeTaxData extends Employee {
  constructor(
      name: string, email: string, private readonly ssn: string,
      private readonly salary: number) {
    super(name, email);
  }

  // ...
}