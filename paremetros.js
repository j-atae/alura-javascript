
            // parametros
function soma(n1, n2) {
    return n1 + n2
}

console.log(soma(2, 2));

// parametros x argumento

// ordem dos parametros

function nomeIdade (nome, idade) {
    return `Meu nome é ${nome} e minha idade é ${idade}`
}

console.log(nomeIdade(40, "Juliana"))

function multiplica(num1 =1, num2=1) {
    return num1 * num2;
}

console.log(multiplica(soma(4, 5), soma(3, 3)))