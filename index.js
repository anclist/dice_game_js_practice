// Create variables for the game state
let player1Score = 0
let player2Score = 0
let player1Turn = true

let diceFace = [
    'img/dice-cero-solid.svg',
    'img/dice-one-solid.svg',
    'img/dice-two-solid.svg',
    'img/dice-three-solid.svg',
    'img/dice-four-solid.svg',
    'img/dice-five-solid.svg',
    'img/dice-six-solid.svg'
]

let player1History = []
let player2History = []

// Create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")
const player1DiceImg = document.getElementById('player1DiceImg')
const player2DiceImg = document.getElementById('player2DiceImg')


function showResetButton() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}

/* Hook up a click event listener to the Roll Dice Button. */
 rollBtn.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * 6) + 1

    if (player1Turn) {
        player1Score += randomNumber
        player1Scoreboard.textContent = player1Score
        player1DiceImg.src = diceFace[randomNumber]
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2 Turn"
        player1History.push(randomNumber)
        console.log(`Player 1: You have rolled the following numbers ${player1History}`)
    } else {
        player2Score += randomNumber
        player2Scoreboard.textContent = player2Score
        player2DiceImg.src = diceFace[randomNumber]
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "Player 1 Turn"
        player2History.push(randomNumber)
        console.log(`Player 2: You have rolled the following numbers ${player2History}`)
    }
    
    if (player1Score >= 20) {
        message.textContent = "Player 1 Won 🥳"
        showResetButton()
    }  else if (player2Score >= 20) {
        message.textContent = "Player 2 Won 🎉"
        showResetButton()
    }
    player1Turn = !player1Turn
})
 
resetBtn.addEventListener("click", function(){
    reset()
})

function reset() {
    player1Score = 0
    player2Score = 0
    player1Turn = true
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1DiceImg.src = diceFace[0]
    player2DiceImg.src = diceFace[0]
    message.textContent = "Player 1 Turn"
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
}
