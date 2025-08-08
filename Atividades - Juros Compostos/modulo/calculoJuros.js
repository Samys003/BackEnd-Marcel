/************************************************************************************************************************************************************************** 
 * Objetivo: Realizar calculo de juros compostos, trabalhando com entrada de dados, variáveis e condicionais. 
 
 * Autor: Samara
  
 * Data: 08/08/2025

 * Versão: 1.0

 * **********************************************************************************************************************************************************************/


function calcularJuros (valor, taxaJuros, parcelas , tempoJuros) {

    let valorProduto = valor

    let jurosAnual = taxaJuros

    let tempoParcelas = parcelas

    let parcelasAnuais = tempoJuros


    let PercentualJuros = jurosAnual / 100

    let formula = Math.pow((1 + PercentualJuros/ tempoParcelas), parcelasAnuais)
    
    let resultado = produto * formula

    return resultado.toFixed(2)




}

module.exports = {

    calcularJuros
}