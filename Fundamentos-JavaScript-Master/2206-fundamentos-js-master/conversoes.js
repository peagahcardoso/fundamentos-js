// tipo de dado 
// booleanos 

// conversão implícita
const numero = 456;
const numeroString = "456";
//outro jeito para soma => const numeroString = number("456");

//console.log(numero == numeroString) => == Comparação implícita

//Number() - Transformar string em número
//String() - Transformar número em string

// o sistema converteu o "numero" de number para string e o + acabou concatenando os textos
// e não somando os mesmos por se tratarem de duas strings

console.log(numero + Number(numeroString))

// não é possível converter uma string que não possui número em Number 

// conversão explícita

//console.warn(new Error('oi'))
