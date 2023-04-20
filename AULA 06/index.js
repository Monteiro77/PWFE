'use script'

export class card extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
        this.foto = null
        this.title = 'Nome do produto'
        this.description = 'Descrição do produto'
        this.price = 'Preço do produto'


    }

    static get observedAttributes() {
        return ['foto', 'title', 'description', 'price']
    }

    attributeChangedCallback(titleAttr, oldValue, newValue) {
        this[titleAttr] = newValue
    }

    connectedCallback() {
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.styles())
    }

    styles() {
        const css = document.createElement('style')
        css.textContent = `

        .card{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            gap: 12px;
            border: 1px solid #ddd;
            border-radius: 5px;
            box-shadow: 0px 0px 8px #0006;
            padding: 16px;
            cursor: pointer;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        .card:houver{
            box-shadow: 0px 0px 8px blue;
        }
        
        .card__image{
            width: 200px;
            height: 200px;
            object-fit: contain;
            background-image: url(${this.foto})
            background-size: cover;
        }
        
        .card__title{
            font-size: 1rem;
        }
        
        .card__price{
            width: 100%;
            font-size: 1.5rem;
            font-weight: 900;
        }

        `

        return css
    }

    component() {
        const card = document.createElement('div')
        card.classList.add('card')

        const foto = document.createElement('div')
        foto.classList.add('card__image')
        

        const tituluProduto = document.createElement('div')
        tituluProduto.classList.add('card__title')
        tituluProduto.textContent = this.title

        const descricaoProduto = document.createElement('div')
        descricaoProduto.classList.add('card__description')
        descricaoProduto.textContent = this.description

        const precoProduto = document.createElement('div')
        precoProduto.classList.add('card_price')
        precoProduto.textContent = this.price

        card.append(foto, tituluProduto, descricaoProduto, precoProduto)

        return card
    }
}

customElements.define('card-produto', card)

// const criarCard = (produto) => {
//     const card = document.createElement('div')
//     card.classList.add('card')

//     const foto = document.createElement('img')
//     foto.classList.add('card__image')
//     foto.src = `./img/${produto.image}`

//     const title = document.createElement('h5')
//     title.classList.add('card__title')
//     title.textContent = produto.name

//     const description = document.createElement('p')
//     description.classList.add('card__description')
//     description.textContent = produto.description

//     const price = document.createElement('p')
//     price.classList.add('card__price')
//     price.textContent = produto.price

//     card.append(foto, title, description, price)

//     return card
// }

// const carregarProdutos = () => {
//     const container = document.getElementById('container')
//     const cards = produtos.map(criarCard)

//     container.replaceChildren(...cards)
// }

// carregarProdutos()