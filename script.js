// var (more free)

var altura = 5;
var comprimento = 7;

area = altura * comprimento;
console.log(area);
var area;

// let (precisa ser declarada antes do seu uso)

let forma = 'retângulo';
let alt = 3;
let comp = 6;
let areazinha;

if (forma === 'retângulo') {
    areazinha = alt * comp;
} else {
    areazinha = alt * comp / 2
}

areazinha = alt * comp;
console.log(areazinha);

// const (não é alterado no decorrer do documento)

const formato = "quadrado";
const altur = 3;
const compri = 6;
let area;

if (formato === "quadrado") {
    areadoquadrado = altur * compri;
} else {
    areadoquadrado = altur * compri / 2
}

console.log(areadoquadrado);
