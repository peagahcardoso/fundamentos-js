// Function Padrão

function apresentar(nome) {
    return `Meu nome é ${nome}`;
}

// console.log(apresentar("Pedro"))

// Arrow Fuction

const apresentaArrow = nome => `Meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

// Arrow Fuction + 1 linha de instrução

const somaNumerosPequenos = (num1, num2) => {
    if (num1 || num2 > 10) {
        return "Somente números de 1 a 9"
    } else {
        return num1 + num2}
}

// Hoisting: arrow function
    

// Operador maior
// >= 