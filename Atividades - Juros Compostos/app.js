/************************************************************************************************************************************************************************** 
 * Objetivo: Realizar calculo de juros compostos, trabalhando com entrada de dados, variáveis e condicionais. 
 
 * Autor: Samara
  
 * Data: 05/08/2025

 * Versão: 1.0

 * **********************************************************************************************************************************************************************/

var calculoJuros = require('./modulo/calculoJuros')

var readline = require('readline')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout

})

entradaDeDados.question('Digite o nome do comprador: ', function(cliente) {

    let comprador = String(cliente).toUpperCase()

    entradaDeDados.question('Insira o valor do produto: ', function (valor) {

        let valorProduto = valor

        entradaDeDados.question('Digite a taxa de juros anual: ', function(taxaJuros) {

            let jurosAnual = taxaJuros

        entradaDeDados.question('Digite a quantidade de parcelas: ', function(parcelas){

            let tempoParcelas = parcelas

            entradaDeDados.question('Digite em quanto tempo será pago (anos): ', function(tempoJuros){

                let parcelasAnuais = tempoJuros

              if( comprador == '' || produto == '' || jurosAnual == ''|| tempoParcelas == '' || parcelasAnuais == ''){
                    console.log('Existem campos não preenchidos')
                    entradaDeDados.close()

              }else if ( isNaN(produto) || isNaN(jurosAnual) || isNaN(tempoParcelas) || isNaN(parcelasAnuais) || isNaN(comprador) == false ){
                    console.log('Existem campos incorretos, preencha novamente!. ')
                    entradaDeDados.close()
              }else{

                let resultado = calculoJuros.calcularJuros(valorProduto,jurosAnual,tempoParcelas,parcelasAnuais )

                console.log(`valor do produto: ${valorProduto} juros anual: ${jurosAnual} quantidade de parcelas ${tempoParcelas} parcelas anuais: ${parcelasAnuais}`)

              }

            })

        })    

        })

    })

})

module.exports = {
  entradaDeDados


}