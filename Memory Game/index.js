 const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    }
]
  
cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenId = [];
let cardsWon = [];

function createBoard() {
    for (let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard);
        grid.appendChild(card);
        // console.log(card);
    }
}
createBoard()

function flipCard() {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 300)
    }
}

function checkForMatch() {
    const card = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (optionOneId === optionTwoId) {
        card[optionOneId].setAttribute('src', 'images/blank.png')
        card[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('You have clicked the same card!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match!')
        card[optionOneId].setAttribute('src', 'images/white.png')
        card[optionTwoId].setAttribute('src', 'images/white.png')
        card[optionOneId].removeEventListener('click', flipCard)
        card[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    }
    else {
        card[optionOneId].setAttribute('src', 'images/blank.png')
        card[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('Sorry, try again')
    }
    
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
}