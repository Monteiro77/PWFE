'use strict'

const nota1 = document.getElementById('nota1')
const  nota2 = document.getElementById('nota2')
const  buttonCalcular = document.getElementById('calcular')
const situacao = document.getElementById('situacao')
const formulario = document.getElementById('formulario')

function calcularMedia(){

    
    resultado.value =  (Number(nota1.value) + Number(nota2.value)) / 2

    if(nota1.value < 0 || nota1.value > 10 || nota2.value < 0 || nota2.value > 10){
        alert('ERROE: Adcione uma nota maior que 0 e menor que 10!!')
         formulario.classList.add('nota-maior')

     } else if(resultado.value < 7){
        formulario.classList.add('reprovado')
        alert('REPROVADO')
    }else{
        formulario.classList.add('aprovado')
        alert( 'APROVADO')
    }

    

}


buttonCalcular.addEventListener('click', calcularMedia)

