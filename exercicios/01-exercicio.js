/**
 * Gerador de tags de identificacao
 * 
 * Crie um script para gerar a etiqueta (tag) de identificacao que sera presa na coleira de um cachorro
 * 
 * A tag deve ter:
 * O nome em letras maiusculas
 * A raca com a primeira letra minuscula
 * peso
 */
const nome ="Jorginho", raca = "yorkshire"
let idade = 5, peso = 2.5, adotado = false

let nameUpperCase = nome.toUpperCase()
let racaFirstletter = raca.charAt(0) .toUpperCase() + raca.slice(1) .toLowerCase()

const animal = [{
    nome: nameUpperCase,
    peso: peso,
    raca: racaFirstletter

}]





