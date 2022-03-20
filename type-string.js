const texto1 = "Olá, mundo!";
const texto2 = 'Olá, mundo!';
const senha = "senhaSuperSegura456!";
const StringDeNumeros = "34567";

const citacao = "Meu nome é ";
const meuNome = "Jacqueline";

// concatenação (+)

console.log(citacao + meuNome)

// template string OU tamplate literal

// UNICODE

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

// Comparação entre Strings

const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false

// JavaScript diferencia minúsculas e maiúsculas, tanto nos valores dos dados quanto no código que escrevemos.

const novacidade = "belo horizonte";
const novoinput = "Belo Horizonte";

const inputMinusculo = novoinput.toLowerCase();

console.log(novacidade === inputMinusculo); // true