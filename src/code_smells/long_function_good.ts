/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jose Fenic Peiteado Padiila
 * @author Pablo Santana Gonzalez
 * @desc Example of long function good.
 * @see {@link}
 * @license GNU General Public License, version 3 (GPL-3.0)
 * @see {@link https://opensource.org/licenses/GPL-3.0}
 */

const REGEXES = [ /* ... */ ];
type Token = {value: string, type: string};
type SyntaxTree = Token[];

/**
 *  Tokenize a given code string using a set of regexes
 * @param code String to be tokenized
 * @returns  Array of tokens
*/
function tokenize(code: string): Token[] {
  const statements = code.split(' ');
  const tokens: Token[] = [];
  
  REGEXES.forEach((regex) => {
    statements.forEach((statement) => {
      tokens.push( /* ... */ );
    });
  });
  
  return tokens;
}

/**
 *  Parse a given array of tokens into a syntax tree
 * @param tokens  Array of tokens
 * @returns   Array of syntax trees
 */
function parse(tokens: Token[]): SyntaxTree [] {
  const syntaxTree: SyntaxTree[] = [];
  tokens.forEach((token) => {
    syntaxTree.push( /* ... */ );
  });

  return syntaxTree;
}

/**
 * Create a AST from a given code string using a set of regexes
 * @param code string 
 */
function parseCode(code: string) {
  const tokens = tokenize(code);
  const syntaxTree = parse(tokens);

  syntaxTree.forEach((node) => {
    // parse...
  });
}



