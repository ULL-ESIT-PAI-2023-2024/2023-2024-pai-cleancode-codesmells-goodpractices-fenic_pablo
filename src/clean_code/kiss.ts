/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jose Fenic Peiteado Padiila
 * @author Pablo Santana Gonzalez
 * @desc Example of the KISS principle. In this example, we want
 *       to find out which numbers were generated randomly.
 * @see {@link }
 * @license GNU General Public License, version 3 (GPL-3.0)
 * @see {@link https://opensource.org/licenses/GPL-3.0}
 */

/**
 * Generates a sequence with random numbers from 0 to 99
 * @param size Size of the generated sequence.
 * @returns An array of the given size with random numbers.
 */
function generateRandomSequence(size: number): number[] {
  let sequence: number[] = [];
  const MAX_GENERATED_NUMBER = 100; // 99 will be the highest generated number.
  for (let currentIndex = 0; currentIndex < size; ++currentIndex) {
    let generatedNumber = Math.floor(Math.random() * MAX_GENERATED_NUMBER);
    sequence.push(generatedNumber);
  }
  return sequence;
}
 
// In this example, we want to find out which numbers were generated randomly.
const SEQUENCE_SIZE = 10;
const SEQUENCE = generateRandomSequence(SEQUENCE_SIZE);

// First approach, a little bit complicated
let uniqueNumbersCollection = new Set<number>();
for (let element of SEQUENCE) {
  uniqueNumbersCollection.add(element);
}

let output = '';
for (let value of uniqueNumbersCollection) {
  output += `${value},`;
}
console.log(output);

// Second approach, simpler
let uniqueNumbersCollection2 = new Set<number>();
SEQUENCE.forEach(value => uniqueNumbersCollection2.add(value));
const SAME_OUTPUT = Array.from(uniqueNumbersCollection2).toString();
console.log(SAME_OUTPUT);




