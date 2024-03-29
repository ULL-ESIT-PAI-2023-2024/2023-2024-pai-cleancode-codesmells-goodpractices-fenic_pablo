/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jose Fenic Peiteado Padiila alu0101227023
 * @author Pablo Santana Gonzalez alu0101480541
 * @desc Examples of good and bad practices in the use of data types
 * @license GNU General Public License, version 3 (GPL-3.0)
 * @see {@link https://github.com/ULL-ESIT-PAI-2023-2024/2023-2024-pai-p04-introtots-fenic-peiteado.git}
 * @see {@link https://opensource.org/licenses/GPL-3.0}
 */


// don't repeat that in your variable name.

type Car = {
  carMake: string;
  carModel: string;
  carColor: string;
}

let carOfHouse: Car = { carMake: 'Toyota', carModel: 'Corolla', carColor: 'Red' };

console.log(carOfHouse.carModel +  ' ' +  carOfHouse.carMake);



