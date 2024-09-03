

/* Resposta: 1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
Imprimir(SOMA);
Ao final do processamento, qual será o valor da variável SOMA? */

let INDICE = 13;
let SOMA = 0;
let K = 0;

while( K < INDICE ) {
    K = K + 1;
    SOMA = SOMA + K;
}

console.log(SOMA)

// o valor da variável SOMA é: 91 




/* Resposta: 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código; */


const  calcularFibonacci = (number) => {

let numbersFibo = [0,1]
if(number < 0) {
    return false
}

if(number === numbersFibo[0] || number === numbersFibo[1]) {
    return true;
}

for (;numbersFibo[numbersFibo.length -1] <= number;) {

    const newNumber = numbersFibo[numbersFibo.length -2] + numbersFibo[numbersFibo.length -1];
    
numbersFibo.push(newNumber);


if(numbersFibo[numbersFibo.length -1] ===  number) {
    return true;
}

}
return false;

}


const value = 13;


const mensagem = calcularFibonacci(value) ? `${value} pertence  a sequência de Fibonacci!`: `${value} não pertence  a sequência de Fibonacci!`;

console.log(mensagem);



/* Resposta: 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
 */



const jsonData = `[
    {"dia": 1, "faturamento": 0},
    {"dia": 2, "faturamento": 1200},
    {"dia": 3, "faturamento": 0},
    {"dia": 4, "faturamento": 1300},
    {"dia": 5, "faturamento": 0},
    {"dia": 6, "faturamento": 1400},
    {"dia": 7, "faturamento": 0},
    {"dia": 8, "faturamento": 1500},
    {"dia": 9, "faturamento": 0},
    {"dia": 10, "faturamento": 300},
    {"dia": 11, "faturamento": 0},
    {"dia": 12, "faturamento": 1700},
    {"dia": 13, "faturamento": 0},
    {"dia": 14, "faturamento": 1800},
    {"dia": 15, "faturamento": 0},
    {"dia": 16, "faturamento": 1900},
    {"dia": 17, "faturamento": 0},
    {"dia": 18, "faturamento": 730},
    {"dia": 19, "faturamento": 0},
    {"dia": 20, "faturamento": 2100},
    {"dia": 21, "faturamento": 0},
    {"dia": 22, "faturamento": 480},
    {"dia": 23, "faturamento": 0},
    {"dia": 24, "faturamento": 2300},
    {"dia": 25, "faturamento": 0},
    {"dia": 26, "faturamento": 100},
    {"dia": 27, "faturamento": 0},
    {"dia": 28, "faturamento": 2500},
    {"dia": 29, "faturamento": 0},
    {"dia": 30, "faturamento": 2600}
]`;

// Menor valor de faturamento ocorrido em um dia do mês (ignora dias com faturamento zero)
const menorFaturamento = () => {
    const faturamentos = JSON.parse(jsonData)
        .map(e => e.faturamento)
        .filter(e => e > 0); // Exclui dias com faturamento zero

    return `O menor valor de faturamento ocorrido em um dia do mês é R$ ${Math.min(...faturamentos)}`;     
};

console.log(menorFaturamento());

// Maior valor de faturamento ocorrido em um dia do mês
const maiorFaturamento = () => {
    const faturamentos = JSON.parse(jsonData)
        .map(e => e.faturamento)
        .filter(e => e > 0); // Exclui dias com faturamento zero

    return `O maior valor de faturamento ocorrido em um dia do mês é R$ ${Math.max(...faturamentos)}`;     
};

console.log(maiorFaturamento());

// Número de dias no mês em que o valor de faturamento diário foi superior à média mensal
const faturamentoSup = () => {
    const faturamentos = JSON.parse(jsonData)
        .map(e => e.faturamento)
        .filter(e => e > 0); // Exclui dias com faturamento zero

    const somaFaturamento = faturamentos.reduce((acc, val) => acc + val, 0);
    const media = somaFaturamento / faturamentos.length; // Calcula a média dos dias com faturamento

    const numDias = faturamentos.filter(e => e > media).length;

    return `O número de dias no mês em que o valor de faturamento diário foi superior à média mensal foi de ${numDias} dias`;
};

console.log(faturamentoSup());



/* Resposta: 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
• SP – R$67.836,43
• RJ – R$36.678,66
• MG – R$29.229,88
• ES – R$27.165,48
• Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.  
 */

const distribuidoras =  {
    SP: 67.83643,
    RJ: 36.67866,
    MG: 29.22988,
    ES: 27.16548,
    Outros:19.84953,
  }


const calcPercentual = () => {
    const total = Object.values(distribuidoras).reduce((acc,va) => acc + va, 0)
     const keys = Object.keys(distribuidoras)
    const values = Object.values(distribuidoras).map(e => (e / total) * 100);
    

    
const newObj = {}

for(let index in keys) {
newObj[keys[index]] = Number(values[index].toFixed(2));
}


let message = []
const entries = Object.entries(newObj).map(e => {
    message  = [...message,`${e[0]} é ${e[1]}%`] 
})

  return `O percentual de: ${message.join(', ')}.`

}


console.log(calcPercentual())


/* Resposta: 5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;
 */

 let string = 'Roma é uma cidade linda!'


const stringIvertida = (value) => {
let newString =''
    for(let index = value.length -1; index >= 0; index--) {
    newString += value[index]
    }

    return newString;
}

console.log(stringIvertida(string))

















