'use strict'

export const pesquisarCep = async function(cepPesquisa) {
    const url = `https://api.postmon.com.br/v1/cep/${cepPesquisa}`
    const response = await fetch(url)
    const data = await response.json()

    return {
        logradouro: data.logradouro,
        bairro: data.bairro,
        cidade: data.cidade,
        estado: data.estado
    }
}