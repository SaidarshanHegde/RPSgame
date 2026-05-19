let playerScore = 0
let computerScore = 0

let totalRounds = 0
let currentRound = 0

let roundWinner = ''

let gameStarted = false

// DOM ELEMENTS

const scoreInfo =
  document.getElementById('scoreInfo')

const scoreMessage =
  document.getElementById('scoreMessage')

const playerScorePara =
  document.getElementById('playerScore')

const computerScorePara =
  document.getElementById('computerScore')

const playerSign =
  document.getElementById('playerSign')

const computerSign =
  document.getElementById('computerSign')

const rockBtn =
  document.getElementById('rockBtn')

const paperBtn =
  document.getElementById('paperBtn')

const scissorsBtn =
  document.getElementById('scissorsBtn')

const roundInput =
  document.getElementById('roundInput')

const startBtn =
  document.getElementById('startBtn')

const resetBtn =
  document.getElementById('resetBtn')

const endgameModal =
  document.getElementById('endgameModal')

const endgameMsg =
  document.getElementById('endgameMsg')

const overlay =
  document.getElementById('overlay')

const restartBtn =
  document.getElementById('restartBtn')

// EVENTS

rockBtn.addEventListener(
  'click',
  () => handleClick('ROCK')
)

paperBtn.addEventListener(
  'click',
  () => handleClick('PAPER')
)

scissorsBtn.addEventListener(
  'click',
  () => handleClick('SCISSORS')
)

startBtn.addEventListener(
  'click',
  startGame
)

resetBtn.addEventListener(
  'click',
  restartGame
)

restartBtn.addEventListener(
  'click',
  restartGame
)

overlay.addEventListener(
  'click',
  closeEndgameModal
)

// START GAME

function startGame() {

  totalRounds =
    Number(roundInput.value)

  if (
    totalRounds <= 0 ||
    isNaN(totalRounds)
  ) {

    alert('Enter valid rounds')
    return
  }

  playerScore = 0
  computerScore = 0

  currentRound = 0

  gameStarted = true

  updateScore()

  scoreInfo.textContent =
    'Game Started!'

  scoreMessage.textContent =
    `Round 0 / ${totalRounds}`
}

// HANDLE CLICK

function handleClick(playerSelection) {

  if (!gameStarted) {

    alert('Start the game first')
    return
  }

  if (currentRound >= totalRounds) {

    openEndgameModal()
    return
  }

  const computerSelection =
    getRandomChoice()

  playRound(
    playerSelection,
    computerSelection
  )

  currentRound++

  updateChoices(
    playerSelection,
    computerSelection
  )

  updateScore()

  scoreMessage.textContent =
    `Round ${currentRound} / ${totalRounds}`

  if (currentRound >= totalRounds) {

    setFinalMessage()

    openEndgameModal()
  }
}

// PLAY ROUND

function playRound(
  playerSelection,
  computerSelection
) {

  if (
    playerSelection ===
    computerSelection
  ) {

    roundWinner = 'tie'
  }

  else if (

    (playerSelection === 'ROCK' &&
      computerSelection === 'SCISSORS')

    ||

    (playerSelection === 'PAPER' &&
      computerSelection === 'ROCK')

    ||

    (playerSelection === 'SCISSORS' &&
      computerSelection === 'PAPER')

  ) {

    playerScore++

    roundWinner = 'player'
  }

  else {

    computerScore++

    roundWinner = 'computer'
  }
}

// RANDOM CHOICE

function getRandomChoice() {

  const choices = [
    'ROCK',
    'PAPER',
    'SCISSORS'
  ]

  return choices[
    Math.floor(Math.random() * 3)
  ]
}

// UPDATE CHOICES

function updateChoices(
  playerSelection,
  computerSelection
) {

  const signs = {

    ROCK: '✊',

    PAPER: '✋',

    SCISSORS: '✌'
  }

  playerSign.textContent =
    signs[playerSelection]

  computerSign.textContent =
    signs[computerSelection]
}

// UPDATE SCORE

function updateScore() {

  playerScorePara.textContent =
    playerScore

  computerScorePara.textContent =
    computerScore

  if (roundWinner === 'player') {

    scoreInfo.textContent =
      'You Won This Round!'

  }

  else if (
    roundWinner === 'computer'
  ) {

    scoreInfo.textContent =
      'Computer Won This Round!'
  }

  else if (roundWinner === 'tie') {

    scoreInfo.textContent =
      "It's a Tie!"
  }
}

// FINAL MESSAGE

function setFinalMessage() {

  if (playerScore > computerScore) {

    endgameMsg.textContent =
      'You Won The Game 🎉'
  }

  else if (
    computerScore > playerScore
  ) {

    endgameMsg.textContent =
      'Computer Won The Game 😢'
  }

  else {

    endgameMsg.textContent =
      'Game Draw 🤝'
  }
}

// MODAL

function openEndgameModal() {

  endgameModal.classList.add(
    'active'
  )

  overlay.classList.add(
    'active'
  )
}

function closeEndgameModal() {

  endgameModal.classList.remove(
    'active'
  )

  overlay.classList.remove(
    'active'
  )
}

// RESTART

function restartGame() {

  playerScore = 0
  computerScore = 0

  currentRound = 0
  totalRounds = 0

  gameStarted = false

  playerSign.textContent = '❔'
  computerSign.textContent = '❔'

  playerScorePara.textContent = 0
  computerScorePara.textContent = 0

  scoreInfo.textContent =
    'Enter number of rounds and click Start Game'

  scoreMessage.textContent =
    'Ready to play?'
  
  endgameMsg.textContent = ''

  roundInput.value = ''

  closeEndgameModal()
}