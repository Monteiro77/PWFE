'use strict'


import { pesquisarCep } from './brasilapi.js'

const preencherFormulario = async function() {

    const cepDigitado = document.getElementById('cep').value
    const cep = await pesquisarCep(cepDigitado)

    document.getElementById('endereco').value = cep.logradouro
    document.getElementById('bairro').value = cep.bairro
    document.getElementById('cidade').value = cep.cidade
    document.getElementById('estado').value = cep.estado
  
}




document.getElementById('cep').addEventListener('blur', preencherFormulario)