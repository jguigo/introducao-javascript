// Crie uma variável chamada nomeCompleto e atribua a ela o seu nome,
// após isso, imprima o valor no console utilizando a função console.log(nomeCompleto)
let nomeCompleto = 'José Guilherme França de Melo';
console.log(nomeCompleto);

// Você irá criar duas variáveis chamadas numeroA e numeroB atribuindo
// valores numéricos para ambas. Após isso crie uma terceira variável
// chamada resultado atribuindo a multiplicação das duas variáveis
// anteriores e imprima o valor do resultado no console
let numeroA = 1;
let numeroB = 2;
let resultado = numeroA * numeroB;
console.log(resultado);

// Você deverá criar uma função chamada saudacao que ao executá-la
// deverá imprimir no console a seguinte mensagem: “Oi eu sou o Goku!”

function saudacao(){
    console.log('Oi eu sou o Goku!');
}

// Crie uma função chamada multiplica que recebe dois parâmetros
// numéricos. Ela deverá exibir a multiplicação desses dois parâmetros no
// console
function multiplica(a, b){
    console.log(a*b);
}

// Crie uma função chamada podeDirigir que receba como parâmetro da
// idade em formato número, e exiba no console “Você pode dirigir” caso o
// valor seja maior ou igual a 18. Caso contrário irá exibir “Você não pode
// dirigir”
function podeDirigir(idade){
    if(idade>=18){
        console.log('Você pode dirigir');
    } else{console.log('Você não pode dirigir')}
}

// Você deve criar um loop usando o for, que exibe no console a sequência
// de números do 0 ao 20.
for(let i = 0; i<=20; i++){
    console.log(i);
}

// Você deve criar um loop usando o for, que exibe no console apenas os
// números ímpares da sequência de números do 0 ao 20.
for(let i = 1; i<=20; i+=2){
    console.log(i);
}

// Crie uma função chamada tabuada que irá receber um número inteiro
// como parâmetro  e exibir no console a tabuada desse número 1 ao 10.
function tabuada(n){
    for(let i = 1; i <= 10; i++){
        console.log(i*n);
    }
}

// Crie uma função chamada converterEmHoras que receba um número em
// minutos como parâmetro e irá exibir a quantidade em horas.
function converterEmHoras(minutos){
    console.log(`${minutos/60} horas`);
}
