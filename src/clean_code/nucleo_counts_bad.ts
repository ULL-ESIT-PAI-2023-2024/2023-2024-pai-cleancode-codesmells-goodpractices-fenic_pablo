/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jose Fenic Peiteado Padiila
 * @since 24/01/2024
 * @desc Explicacion del programa:
 * @see {@link }
 * @license GNU General Public License, version 3 (GPL-3.0)
 * @see {@link https://opensource.org/licenses/GPL-3.0}
 */

const ELEMENT_DNA = ['A', 'C', 'G', 'T'];
interface Nucleotide {
  A: number;
  C: number;
  G: number;
  T: number;
}

/**
 * Given a DNA string, compute how many times each nucleotide occurs in the
 * string.
 * @param sequenceDna Input DNA string
 * @returns Nucleotide object with the count of each nucleotide
 */
export function nucleotideCounts(sequenceDna: string): Nucleotide {
  if (HaveDiferentCharDna(sequenceDna)) {
    throw new Error('Invalid nucleotide in strand');
  }
  let result: Nucleotide = {
    A: 0,
    C: 0,
    G: 0,
    T: 0,
  };
  for (const value of sequenceDna) {
    if (value === 'A') {
      result.A++;
    } else if (value === 'C') {
      result.C++;
    } else if (value === 'G') {
      result.G++;
    } else if (value === 'T') {
      result.T++;
    }
  }
  return result;
}

/**
 * @description Check if the DNA has diferent characters
 * @param sequenceDna
 * @returns boolean
 */
function HaveDiferentCharDna(sequenceDna: string): boolean {
  // Given a DNA string, compute how many times each nucleotide occurs in the
  for (const value of sequenceDna) {
    if (!ELEMENT_DNA.includes(value)) {
      return true;
    }
  }
  return false;
}

