/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jose Fenic Peiteado Padiila alu0101227023
 * @author Pablo Santana Gonzalez alu0101480541
 * @desc This Contains diferrents way for to better our develope function
 * @license GNU General Public License, version 3 (GPL-3.0)
 * @see {@link https://github.com/ULL-ESIT-PAI-2023-2024/2023-2024-pai-p04-introtots-fenic-peiteado.git}
 * @see {@link https://opensource.org/licenses/GPL-3.0}
 */

// Use meaningful variable names

/**
 * Check if a value is between two values
 * @param a1 Value that have to be between a2 and a3
 * @param a2 Value that must be less or equal than a1
 * @param a3 Value that must be greater or equal than a1
 * @returns true if a1 is between a2 and a3, false otherwise
 */
function between<T>(a1: T, a2: T, a3: T): boolean {
    return a2 <= a1 && a1 <= a3;
  }

/**
 * Check if a value is between two values left and right
 * @param value value that have to be between left and right
 * @param left value that must be less or equal than value
 * @param right value that must be greater or equal than value
 * @returns true if value is between left and right, false otherwise
 */
function betweenTwoValues<T>(value: T, left: T, right: T): boolean {
    return left <= value && value <= right;
  }

// Use pronounceable variable names

// pronounceable functions you cant pronunce 
// the name of the function
type DtaRcrd102 = {
    genymdhms: Date;
    modymdhms: Date;
    pszqint: number;
  }

// Can be proounceable, so you can explain what do
type Customer = {
    generationTimestamp: Date;
    modificationTimestamp: Date;
    recordId: number;
  }


// Don't add unneeded context
// If your class/type/object name tells you something, 
// don't repeat that in your variable name.

type User = {
  name: string;
  age: number;
  email: string;
}

// Use explanatory variables
declare const users: Map<string, User>;
for (const keyValue of users) {
  // iterate through users map
}


// Good Example
declare const user: Map<string, User>;

for (const [userName, user] of users) {
  // iterate through users map
}