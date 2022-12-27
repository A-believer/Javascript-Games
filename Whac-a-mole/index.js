const squares = document.querySelectorAll('.square');
const score = document.querySelector("#score")
const timeLeft = document.querySelector("#time-left")
const mole = document.querySelector(".mole")


let timerId = null;
let hitPosition
let result = 0
let currentTime = 16
let randomSquares

function randomSquare() {
  squares.forEach(square => {
    square.classList.remove('mole')
  })

  randomSquares = squares[Math.floor(Math.random() * 9)]
  randomSquares.classList.add('mole')

  hitPosition = randomSquares.id
}

squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if (square.id == hitPosition) {
      result++
      score.textContent = result
      hitPosition = null
    }
  })
})

function moveMole() {
  timerId = setInterval(randomSquare, 700)
}

moveMole()

function countDown() {
  currentTime--
  timeLeft.textContent = currentTime

  if (currentTime == 0) {
    clearInterval(timerId)
    clearInterval(countDownTimerId)
    alert("GAME OVER! Your score is " + result)
    squares.removeEventListener('mousedown')
  }
}

let countDownTimerId = setInterval(countDown, 1500)