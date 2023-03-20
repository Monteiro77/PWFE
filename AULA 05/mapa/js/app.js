'use strict'

const mapa = document.querySelector('svg')

const getStatus = function(event){

    const estado = event.target.id.replace('BR-', 'Estado-')
            
    
}


 mapa.addEventListener('click', getStatus)

