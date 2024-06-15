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
        img: 'img/mnk.png',
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
        img: 'img/mnk.png',
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
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

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

function checkMatch() {
const cards = document.querySelectorAll('img')
const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
if (optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute('src', 'img/DPSrole.png')
        cards[optionTwoId].setAttribute('src', 'img/DPSrole.png')
    alert('You clicked the same image!')
}
    if (cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match!')
cards[optionOneId].setAttribute('src', 'img/Fisher.png')
cards[optionTwoId].setAttribute('src', 'img/Fisher.png')
cards[optionOneId].removeEventListener('click', flipCard)
cards[optionTwoId].removeEventListener('click', flipCard)
cardsWon.push(cardsChosen)
} 
else {
    cards[optionOneId].setAttribute('src', 'img/DPSrole.png')
    cards[optionTwoId].setAttribute('src', 'img/DPSrole.png')
    alert('Try Again!')
}
resultDisplay.innerHTML = cardsWon.length
cardsChosen = []
cardsChosenIds = []

if (cardsWon.length == cardArray.length/2) {
resultDisplay.innerHTML = 'You found them all!'
}
}

function flipCard() {  
const cardId = this.getAttribute('data-id')
cardsChosen.push(cardArray[cardId].name)
cardsChosenIds.push(cardId)
this.setAttribute('src', cardArray[cardId].img)
if (cardsChosen.length === 2) {
    setTimeout( checkMatch, 500)
}
}