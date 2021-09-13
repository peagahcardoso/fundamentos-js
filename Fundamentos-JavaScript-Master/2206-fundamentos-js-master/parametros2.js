// Parâmetros de Função



function soma(num1, num2) {
    return num1 + num2;
}


//console.log(soma(2, 2))
//console.log(soma(232, 212))
//console.log(soma(22, 21))

// Parâmetros x Argumentos

// Ordem dos Parâmetros

function nomeIdade(nome, idade) {
        return `meu nome é ${nome} e minha idade é ${idade}`
}

//console.log(nomeIdade("Pedro", 26))

function multiplicacao(num1, num2) {
        return num1 * num2; 
}

console.log(multiplicacao(soma(4, 5), soma(2, 3)))