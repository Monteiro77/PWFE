'use strict'

const adicionar = document.getElementById('adicionar')


// const adicionarCard = () => {
//     const container = document.getElementById('container')
//     container.innerHTML = container.innerHTML + '<div class = "item"></div>' 
// }

const adicionarCard = (nome, nota) => {
    const container = document.getElementById('container')
    const novaDiv = document.createElement('div')
    novaDiv.classList.add('aluno')
    novaDiv.innerHTML = `<h2 class = "aluno">${nome}</h2>
                         <span class = "aluno__nota">${nota}</span>`
    novaDiv.classList.add('item')

    if(nota == "" || nome == "" || nota == null ){
        
        alert('Não é possivel confirmar com um valor vazio ou nulo')

    }else if(nota < 0 || nota > 10){
        
        alert('Não digite número maiores que 10 ou menores que 0!!!')

    }else if(nota >= 7 && nota <= 10){
        novaDiv.classList.remove('aluno')
        novaDiv.classList.add('aluno__aprovado')
        container.appendChild(novaDiv)
        
    }else if(nota <= 6 && nota >= 0){
        
        novaDiv.classList.remove('aluno')
        novaDiv.classList.add('aluno__reprovado')
        container.appendChild(novaDiv)

    }else if(isNaN(nota)){

        alert('Não digite letras na nota')

    }else{
        container.appendChild(novaDiv)
    }

    
}


const handleClick = () => {
    const nome =   prompt('Digite o nome do aluno: ')
    const nota =   prompt('Digite sua nota: ')
    
    
    adicionarCard(nome, nota)
}

adicionar.addEventListener('click', handleClick)