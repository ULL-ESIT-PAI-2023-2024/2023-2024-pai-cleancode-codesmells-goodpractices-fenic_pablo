/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jose Fenic Peiteado Padiila
 * @since 24/01/2024
 * @desc Example of nucleotide count good.
 * @see {@link }
 * @license GNU General Public License, version 3 (GPL-3.0)
 * @see {@link https://opensource.org/licenses/GPL-3.0}
 */

interface Nucleotide {
  A: number;
  C: number;
  G: number;
  T: number;
}

/**
 * Check if the DNA has different characters
 * @param sequenceDna string with the DNA sequence
 * @returns true if the DNA has different characters and false in other case
*/
function haveDifferentCharDna(sequenceDna: string): boolean {
  const ELEMENT_DNA = ['A', 'C', 'G', 'T'];
  for (const value of sequenceDna) {
    if (!ELEMENT_DNA.includes(value)) {
      return true;
    }
  }
  return false;
}

/**
 * Given a DNA string, compute how many times each nucleotide occurs in the
 * string.
 * @param sequenceDna Input DNA string
 * @returns Nucleotide object with the count of each nucleotide
 */
export function nucleotideCounts(sequenceDna: string): Nucleotide {
  if (haveDifferentCharDna(sequenceDna)) {
    throw new Error('Invalid nucleotide in strand');
  }
  let result: Nucleotide = {
    A: 0,
    C: 0,
    G: 0,
    T: 0,
  };
  for (const value of sequenceDna) {
    switch (value) {
      case 'A':
        result.A++;
        break;
      case 'C':
        result.C++;
        break;
      case 'G':
        result.G++;
        break;
      case 'T':
        result.T++;
        break;
    }
  }
  return result;
}


