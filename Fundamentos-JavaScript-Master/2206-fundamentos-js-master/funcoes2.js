// Funcoes

// let x = ""; 
// console.log(x)
// x = "oi";

// 1) Declaração de Função

                     //string
function imprimeTexto(texto) {
    console.log(texto)
}

// 2) Executa a função (1 ou + vezes)

imprimeTexto(soma());
//imprimeTexto("outro texto");

// três formas de escrever funções

// O return é a última cláusula da função, ou seja, o que for escrito depois não será executado.

function soma(){
    return 2 + 2;
}

// console.log(soma())