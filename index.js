/** 
 * Console API
*/

console.log("Aula inicial JS")

console.error("Falha na execucao")

console.warn("Atencao")

console.table([{
    
    nome :'Juliana',
    turma:'02',
    disciplina: 'Prog JS'
},
{
    nome :'Pedro',
    turma:'10',
    disciplina: 'Prog JS'

}])

/** 
 * Constantes e variaveis
 */
//const - para informacoes que nunca mudam
//var ou let - para informacoes que podem mudar

//informacoes de um dog que nao mudam

 const nome = 'Jorginho'
 const raca = 'yorkshire'
 const sexo = 'Macho'
 const cor = 'Caramelo'
 const dataDeNascimento = '20/12/2020'
const porte = 'P'
 //informacoes de um dog que muda

 let idade = 5
 let peso = 2.6
 let vacinado = true
 let castrado =false
 let tamanho = 'M'

//hoisting -> icamento ou elevacao
 const irmaos = [
    {
        nome: "Thor",
        idade: 2

    },
    {
        
        nome:"Hela",
        idade: 3
   }
 ]
 console.table(irmaos)

 /**
  * Tipos de Dados cadeia de caracteres, inteiro,real, logico,vetor, matriz
  * (funcoes - leia e escreva)
  */

 //const valor = "50"
 //console.log (valor)

 /**
  * strings
  */
 //'Turma 02 do PGATS' - aspas simples ou quote
 //"Turma 02 do PGATS" - aspas duplas ou double quote
 //`Turma 02 do PGATS` - template strings

 const numeroAula = "03"
 const turma = "02"
 let data = "05 de Abril"


 console.log("Aula 03 da Turma " + turma + " no Sabado dia 5")

 console.log(`Aula 03 da Turma ${turma} no Sabado dia 5`)

 console.log(`Aula ${numeroAula}  da turma ${turma} no Sabado dia ${data} `)

 console.log(data.length)

 //split - separar a string

 const NomesDeAlunos = "Juliana Luciana Marcia Jorginho"

 const NomesDeAlunosSplit = NomesDeAlunos.split(" ")

 console.log(NomesDeAlunosSplit)

 console.log(NomesDeAlunos.toLowerCase())
 console.log(NomesDeAlunos.toUpperCase())

 console.log(NomesDeAlunos.includes("Juliana"))

console.log(NomesDeAlunos.replaceAll('a', 'i'))

const conceitosLogica = "      inteiro real cadeia de caracteres........."
console.log(conceitosLogica.trim())


let dataParaCortar = " 05 de Abril"
const cpf="12599874562"

   console.log(dataParaCortar.slice(0, 2))

   console.log(cpf.slice(0, 3))

   


