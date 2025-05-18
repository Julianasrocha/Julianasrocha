/**
 * Validador de nomes para tags
 * 
 * Alguns donos estao registrando os dog com nomes mal formados. Crie um scropt para limpar e padroniza-los
 * 
 * aplique as formatacoes e exiba:
 * 
 * O nome original, como foi cadastrado
 * o nome formatado
 * 
 * Extra: aplique uma regra que confirma se o nome informado possui apenas uma palavra. Exiba se o nome é valido ou nao
 * 
 * Exemplos:

  - nomes válidos
    - Pipoca
    - Guaraná
    - Paçoca
  - nomes inválidos
    - Peggy Carter
    - Pantera Negra
 */

const nomeDog = "tH   oR@!%  "

let nomeFormatado = removerCaracteresEspeciais(nomeFormatado)
nomeFormatado = nomeFormatado.charAt(0).toUpperCase() + nomeFormatado.slice(1, nomeFormatado.length).toLowerCase()

console.log(nomeDog)
console.log(nomeFormatado)

function removerCaracteresEspeciais(nome) {
    return nome.replace(/\s+/g, "").replace(/[^a-zÀ-Z-ÿ]/g, "")
}


// const palavras = nomeFormatado.split(/\s+/);
// const palavras = nomeFormatado.split(" ");
// const valido = palavras.length === 1;

// 10 == '10'
// 10 === '10'

/*

  operadores = comparacao, logica, aritmética

    VALOR A maior que VALOR B
    VALOR A menor que VALOR B

    == -> VARIAVEL A 'possui o mesmo valor que' VARIAVEL B 
    === -> VARIAVEL A 'possui o mesmo valor E possui o mesmo tipo de dado que' VARIAVEL B

*/


/*const valido = verificarSeONomeEValido(nomeFormatado)

console.log(nomeDog)
console.log(nomeFormatado)
console.log(valido)

function removerCaracteresEspeciais(nome) {
  // return nome.replace(/[^a-zA-ZÀ-ÿ]/g, "");
  return nome.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
}

function removerEspacosEntreAPalavra(nome) {
  return nome.replace(/\s+/g, "")
}

function tornarAPrimeiraLetraMaiuscula(nome) {
  return nome.charAt(0).toUpperCase() + nome.slice(1, nome.length).toLowerCase()
}

function verificarSeONomeEValido(nome) { 
  return nome.split(" ").length === 1
}
*/

   