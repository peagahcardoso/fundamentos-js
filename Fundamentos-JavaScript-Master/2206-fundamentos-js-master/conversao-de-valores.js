//Conversão de Valores

let telefone = 12341234;
console.log(“O telefone é ” + String(telefone)); 

// teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação
// entre as strings

let telefone = 12341234;
console.log(“O telefone é ” + telefone.toString(); 

// o .toString() é uma outra forma para  fazer essa conversão,
//que é mais parecida com outras linguagens de programação.

// Vamos calcular a área de um retângulo
let largura = “10”;
let altura = “5”;
console.log( Number(largura) * Number(altura)); 
// teremos a conversão de String para números, possibilitando a realização da da multiplicação

let usuarioConectado= false;
console.log (Number( usuarioConectado ) ); 

// teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.
usuarioConectado= true;
console.log (Number( usuarioConectado ) ); // agora teremos a conversão de true (verdadeiro) para o número 1.

//true = 1
//false = 0 ou " "