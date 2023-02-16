'use strict'

const nota1 = document.getElementById('nota1')
const  nota2 = document.getElementById('nota2')
const  buttonCalcular = document.getElementById('calcular')
const situacao = document.getElementById('situacao')
const formulario = document.getElementById('formulario')

function calcularMedia(){

    
    resultado.value =  (Number(nota1.value) + Number(nota2.value)) / 2

    if(nota1.value < 0 || nota1.value > 10 || nota2.value < 0 || nota2.value > 10){
        formulario.classList.add('nota-maior')
        formulario.classList.remove('reprovado')
        formulario.classList.remove('aprovado')
        resultado.value = ('ERROR: Adcione uma nota maior que 0 e menor que 10!!')

     } else if(resultado.value < 7 && resultado.value >= 0){
        formulario.classList.add('reprovado')
        formulario.classList.remove('aprovado')
        resultado.value = ('Reprovado. Sua média é : ' + resultado.value )
    }else if(resultado.value >= 7 && resultado.value <= 10){
        formulario.classList.add('aprovado')
        formulario.classList.remove('reprovado')
        resultado.value = ('Aprovado. Sua média é : ' + resultado.value)
    }
    

}


buttonCalcular.addEventListener('click', calcularMedia)

