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

// Example that is dificult read function a know what do
function between<T>(a1: T, a2: T, a3: T): boolean {
    return a2 <= a1 && a1 <= a3;
  }

// Good Example That describe what do
function betweenTwoValues<T>(value: T, left: T, right: T): boolean {
    return left <= value && value <= right;
  }

// pronounceable functions
type DtaRcrd102 = {
    genymdhms: Date;
    modymdhms: Date;
    pszqint: number;
  }

// Can be proounceable
type Customer = {
    generationTimestamp: Date;
    modificationTimestamp: Date;
    recordId: number;
  }
