/******************************************************************************************************************************************************************************
 
* Objetivo: iniciar os comandos em Node.JS

* Autor:  Samara 

* Data: 29/07/2025

* Versão: 1.0

********************************************************************************************************************************************************************************/

/* comentario em bloco */
// comentario em linha

/*ctrl + c para sair de uma execução no terminal

JS não é uma linguagem de programação fortemente tipada!

";" no js não é obrigátorio

função de callback - 

*/

//importe da biblioteca para fazer entrada de dados via terminal 
// (Iremos utilizar ela de forma provisória)
// "require" é sempre utilizado para fazer importes no JS
var readline = require('readline')

//criando um objeto de entrada de dados para captar ou printar dados via terminal
var entradaDeDados = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})


//"question" é o método que "coleta" o que o usuario digita e devolve a resposta
entradaDeDados.question('Digite seu nome: ', function(nome){
 var nomeUsuario = nome 

if(nomeUsuario == ''){
    console.log('Não foi possivel processar a solicitação')
}else{
    //String() -> converte o objeto em uma sting
    //toUpperCase() -> converte o conteudo de uma string em maiusculo.

    console.log('o nome digitado foi: ' + String(nomeUsuario).toUpperCase())
    console.log(nome)
}

 entradaDeDados.close() //fecha de interface de entrada de dados do readline
})

/*

//"print.ln()"
console.log('Aula 01 de Node.JS')

// declarando uma variavel
var nome = '666'

//exemplo de concatenação de dados (simbolo de (+))
console.log('o nome digitado foi ' + nome)
//exemplo de concatenação de metodo reduzido
console.log(`o nome digitato foi ${nome}`)

//typeof -> permite mostrar o tipo de dados de objeto ou variável
console.log(typeof(nome))

*/