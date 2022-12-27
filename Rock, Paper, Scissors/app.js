const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('results')
const possibleChoicesDisplay = document.querySelectorAll('button')
let userChoice
let randomNumber
let computerChoice
let result


possibleChoicesDisplay.forEach(
    possibleChoice =>
        possibleChoice.addEventListener(
            'click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.textContent = userChoice;
    generateComputerChoice();
    getResult();
}))

function generateComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3) + 1 
    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'paper'
    }
    if (randomNumber === 3) {
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.textContent = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "It's Draw!"
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = "You Lost!"
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = "You Won!"
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = "You Lost!"
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = "You Won!"
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = "You Won!"
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = "You Lost!"
    }

    resultDisplay.textContent = result
}