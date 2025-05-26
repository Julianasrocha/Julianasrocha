/**

    escolha (condicao):
      caso x: faca
      caso y: faca 
      caso z: faca
  
 */

      const peso = 31

      switch (peso) {
        case 10:
          console.log('P')
          break
        case 20:
          console.log('M')
          break
        case 30:
          console.log('G')
          break
        case 40:
          console.log('G')
          break
        default:
          console.log('ND') 
      }
      
      // Se quiser muito usar switch, dá para fazer um truque com true, tipo:
      switch (true) {
        case peso <= 10:
            console.log('P');
            break;
        case peso <= 20:
            console.log('M');
            break;
        case peso <= 30:
            console.log('G');
            break;
        default:
            console.log('ND');
      }
/**
  condicao (se verdadeira)
    acao dentro do if
  senao se (outra condicao)
    acao dentro do if
  senao 
    acao dentro do else
 
 */

    if (10 < 5) {
        console.log(`valor é maior`)
      } else {
        console.log(`valor é menor`)
      }
      
      const idade = 3
      //const porte = 'P'
      
      if (idade >= 2) {
        console.log(`Pode ser adotado, pela idade`)
      } else if (porte === 'P') {
        console.log(`Pode ser adotado, pelo porte`)
      } else {
        console.log(`Não pode ser adotado`)
      }
/**

Classificador de porte automático

Muitos tutores não fazem ideia do porte de seu Dog. 
Crie um script que classifique o porte com base no peso de forma simplificada, sendo:

Até 10kg -> Pequeno; acima disso -> Médio

Use o operador ternário para determinar o porte. Exiba:
Nome
Peso
Porte classificado

Extra: transforme a lógica em uma função (da forma que conseguir)
Extra: adicionar mais condições exemplo: >= 50 -> porte grande

 */

const nome = `Ada`
const pesos = 11

const porte = peso <= 10 ? 'pequeno' : 'médio'

console.log(`------`)
console.log(`Nome: ${nome}`)
console.log(`Peso: ${pesos}`)
console.log(`Porte: ${porte}`)
console.log(`------`)

// ALTERNATIVA com a função (Extra)
function classificarPortePorPeso(nome, peso) {
    const porte = peso <= 10 ? 'pequeno' : 'médio'
  
    console.log(`------`)
    console.log(`Nome: ${nome}`)
    console.log(`Peso: ${peso}`)
    console.log(`Porte: ${porte}`)
    console.log(`------`)
  }

  const nomes = `Pantera`
const portes = `médio`
const tempo = 30

// decidir o tipo de atividade com base no porte
let atividade

switch (porte) {
  case 'pequeno':
    atividade = `brincar dentro de casa`
    break
  case 'médio':
    atividade = `caminhada no quarteirão`
    break 
  case 'grande':
    atividade = `correr no parque`
    break 
  default:
    atividade = `porte inválido`
}

// ajustar a mensagem de acordo com o tempo
// Depois, uma condicional para ajustar a mensagem de acordo com o tempo: 
//   menor que 15 -> "atividade rápida: [atividade]"
//   de 15 a 30 -> "tempo ideal: [atividade]"
//   acima de 30 -> "hora da diversão: [atividade]
let mensagem

if (tempo < 15) {
  mensagem = `atividade rápida`
} else if (tempo <= 30) {
  mensagem = `tempo ideal`
} else if (tempo > 30) {
  mensagem = `hora da diversão`
}

console.log(`${ mensagem }: [${ atividade }]`)