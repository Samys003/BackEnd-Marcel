/************************************************************************************************************************************************************************** 
 * Objetivo: Realizar calculo de médias escolares, trabalhando com entrada de dados, variáveis e condicionais. 
 
 * Autor: Samara
  
 * Data: 01/08/2025

 * Versão: 1.0

 * **********************************************************************************************************************************************************************/

/****************
 * LET -> Permite criar um espaço em memória (variável), deve-se obrigatoriamente ultizar apenas dentro de um bloco (IF, loop, function, etc) Essa variavel nasce 
 *        e morre dentro desse bloco.
 * 
 * VAR -> Permite criar um espaço em mémoria (variável), porem é um método mais antigo do JS, quase não se utiliza mais em projetos
 * 
 * CONST -> Permite criar um espaço em memória (constante), cujo conteudo não sofre mudança durante um programa.
 *          Podemos criar uma constante em qualquer parte do código. Obs: recomenda-se que a escrita de uma const seja em MAISCULO.
 * 
 * Formas de conversão de dados
 * String() -> permite converter um objeto ou variável em string
 * parseInt() -> converte para um número inteiro
   parseFloat() -> converte para decimal
   Number() -> converte um objeto em decimal ou inteiro
 * Boolean() -> permite converter um objeto valor booleano (true/false)
 * object() -> permite converter uma variavel em objeto (array, json, classe)
 * 
 * toUpperCase() -> converte todas as letras em maisculo 
 * toLowerCase() -> converte todas as letras em minusculo
 * 
 * tofixed() -> Permite limitar a quantidade de casas
 * 
 * Operadores de Comparação
 * 
 * == -> validação de igualdade entre conteudos 
 * <  -> validação menor valor 
 * >  -> validação de maior valor
 * >= -> validação de maior valor ou igualdade
 * <= -> validação de menor valor ou igualdade
 * != -> validação da diferença entre conteúdos 
 * === -> validação de igualdade em conteudos e igualdade nos tipos de dados
 * !==  -> validação de diferença entre conteudos e igualdade nos tipos de dados (sempre verificar a documentação da linguagem)
 * !=! ->  validação de diferença entre os conteudos e diferença entre tipos de dados (sempre verificar a documentação da linguagem)
 
 

Operadores lógicos

E    AND  &&
OU   OR   ||
NÃO  NOT  !
 
 */

//Import da biblioteca que calcula a média
var mediaEscolar = require('./modulo/media.js')

//Import da biblioteca readline
var readline = require('readline')

//  Criando um objeto para entrada e saida de dados via terminal
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout

})

//Entrada de dados do nome do aluno
entradaDeDados.question('Digite o nome do aluno:', function (nome) {
    //Recebe o call back e converte para MAIUSCULO
    let nomeAluno = String(nome).toUpperCase()

    //entrada de dados nota1
    entradaDeDados.question('Digite a nota1: ', function (valor1) {
        let nota1 = valor1

        entradaDeDados.question('Digite a nota2: ', function (valor2) {
            let nota2 = valor2

            entradaDeDados.question('Digite a nota3: ', function(valor3){
                let nota3 = valor3

                entradaDeDados.question('Digite a nota4: ', function(valor4){
                    let nota4 = valor4

                    // validação de tratamento de entrada vazia
                    if(nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '' || nomeAluno == ''){
                        console.log('Erro: Existem campos que não foram preenchidos. ')

                    }else if(isNaN(nota1) || isNaN(nota2)  || isNaN(nota3) || isNaN(nota4)){   
                            console.log('Erro: não é possivel calcular com a entrada de letras')

                    }else if(Number(nota1) < 0 || Number(nota1) > 10 || Number(nota2) < 0 || Number(nota2) > 10 || 
                             Number(nota3) < 0 || Number(nota3) > 10 || Number(nota4) < 0 || Number(nota4) > 10 ){
                        console.log('ERRO: Os valores informados precisam ser entre 0 ate 10')  

                    }else{

                        //chama a função para gerar a media
                        let media = mediaEscolar.calcularMedia(nota1,nota2,nota3,nota4)
                        
                        //chama a função para validar o status do aluno
                        let statusAluno = mediaEscolar.validarStatus(media)
                        
                        if(statusAluno){
                        console.log(`O Aluno(a) ${nomeAluno} teve a média: ${media} e está: ${statusAluno}`)

                        entradaDeDados.close()
                    }
                }
                })
            })
        })

    })
})

