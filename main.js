let cards = [
    {
        "imagem": "./imagens/galeria_1.jpeg",
        "link": "./imagens/galeria_1.jpeg"
    },
    {
        "imagem": "./imagens/galeria_2.jpeg",
        "link": "./imagens/galeria_2.jpeg"
    },
    {
        "imagem": "./imagens/galeria_3.jpeg",
        "link": "./imagens/galeria_3.jpeg"
    },
    {
        "imagem": "./imagens/galeria_4.jpeg",
        "link": "./imagens/galeria_4.jpeg"
    },
    {
        "imagem": "./imagens/galeria_5.jpeg",
        "link": "./imagens/galeria_5.jpeg"
    },
    {
        "imagem": "./imagens/galeria_6.jpeg",
        "link": "./imagens/galeria_6.jpeg"
    },
    {
        "imagem": "./imagens/galeria_7.jpeg",
        "link": "./imagens/galeria_7.jpeg"
    },
    {
        "imagem": "./imagens/galeria_8.jpeg",
        "link": "./imagens/galeria_8.jpeg"
    },
    {
        "imagem": "./imagens/galeria_9.jpeg",
        "link": "./imagens/galeria_9.jpeg"
    },
    {
        "imagem": "./imagens/galeria_10.jpeg",
        "link": "./imagens/galeria_10.jpeg"
    },
    {
        "imagem": "./imagens/galeria_11.jpeg",
        "link": "./imagens/galeria_11.jpeg"
    },
    {
        "imagem": "./imagens/galeria_12.jpeg",
        "link": "./imagens/galeria_12.jpeg"
    },
    {
        "imagem": "./imagens/galeria_13.jpeg",
        "link": "./imagens/galeria_13.jpeg"
    },
    {
        "imagem": "./imagens/galeria_14.jpeg",
        "link": "./imagens/galeria_14.jpeg"
    },
    {
        "imagem": "./imagens/galeria_15.jpeg",
        "link": "./imagens/galeria_15.jpeg"
    },
    {
        "imagem": "./imagens/galeria_16.jpeg",
        "link": "./imagens/galeria_16.jpeg"
    },
    {
        "imagem": "./imagens/galeria_17.jpeg",
        "link": "./imagens/galeria_17.jpeg"
    },
    {
        "imagem": "./imagens/galeria_18.jpeg",
        "link": "./imagens/galeria_18.jpeg"
    },
    {
        "imagem": "./imagens/galeria_19.jpeg",
        "link": "./imagens/galeria_19.jpeg"
    },
    {
        "imagem": "./imagens/galeria_20.jpeg",
        "link": "./imagens/galeria_20.jpeg"
    },
    {
        "imagem": "./imagens/galeria_21.jpeg",
        "link": "./imagens/galeria_21.jpeg"
    },
    {
        "imagem": "./imagens/galeria_22.jpeg",
        "link": "./imagens/galeria_22.jpeg"
    },
    {
        "imagem": "./imagens/galeria_23.jpeg",
        "link": "./imagens/galeria_23.jpeg"
    },
    {
        "imagem": "./imagens/galeria_24.jpeg",
        "link": "./imagens/galeria_24.jpeg"
    },
    {
        "imagem": "./imagens/galeria_25.jpeg",
        "link": "./imagens/galeria_25.jpeg"
    },
    {
        "imagem": "./imagens/galeria_26.jpeg",
        "link": "./imagens/galeria_26.jpeg"
    },
    {
        "imagem": "./imagens/galeria_27.jpeg",
        "link": "./imagens/galeria_27.jpeg"
    },
    {
        "imagem": "./imagens/galeria_28.jpeg",
        "link": "./imagens/galeria_28.jpeg"
    },
    {
        "imagem": "./imagens/galeria_29.jpeg",
        "link": "./imagens/galeria_29.jpeg"
    },
    {
        "imagem": "./imagens/galeria_30.jpeg",
        "link": "./imagens/galeria_30.jpeg"
    },
    {
        "imagem": "./imagens/galeria_31.jpeg",
        "link": "./imagens/galeria_31.jpeg"
    },
    {
        "imagem": "./imagens/galeria_32.jpeg",
        "link": "./imagens/galeria_32.jpeg"
    },
    {
        "imagem": "./imagens/galeria_33.jpeg",
        "link": "./imagens/galeria_33.jpeg"
    },
    {
        "imagem": "./imagens/galeria_34.jpeg",
        "link": "./imagens/galeria_34.jpeg"
    } 
]
console.table(cards)

const elementoParaInserirCards = document.getElementById('cards')

exibirOsCardsNaTela(cards)

function exibirOsCardsNaTela(listaDeCards){
    listaDeCards.forEach(card => {
        elementoParaInserirCards.innerHTML += `<a href=${card.link} class="card">
        <img src=${card.imagem} alt="foto">
    </a>`
    })
}