const cardArray = [
    {
        name: 'blm',
        img: 'img/blm.png',
    },
    {
        name: 'brd',
        img: 'img/brd.png',
    },
    {
        name: 'drg',
        img: 'img/drg.png',
    },
    {
        name: 'mnk',
        img: 'img/brd.mnk',
    },
    {
        name: 'nin',
        img: 'img/nin.png',
    },
    {
        name: 'smn',
        img: 'img/smn.png',
    },
    {
        name: 'blm',
        img: 'img/blm.png',
    },
    {
        name: 'brd',
        img: 'img/brd.png',
    },
    {
        name: 'drg',
        img: 'img/drg.png',
    },
    {
        name: 'mnk',
        img: 'img/brd.mnk',
    },
    {
        name: 'nin',
        img: 'img/nin.png',
    },
    {
        name: 'smn',
        img: 'img/smn.png',
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const cardsChosen = []

function createBoard() {
for (let i = 0; i < cardArray.length; i++) {
   const card = document.createElement('img')
   card.setAttribute('src', 'img/dpsrole.png')
   card.setAttribute('data-id', i)
   card.addEventListener('click', flipCard)
   gridDisplay.appendChild(card)
}
}

createBoard()

function flipCard() {
    console.log(cardArray)
const cardId = this.getAttribute('data-id')
cardsChosen.push(cardArray[cardId].name)
console.log('clicked', cardId)
console.log(cardsChosen)
}

//47:20 on vid