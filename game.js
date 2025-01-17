/**
 * Rock Paper Scissors Game
 */

let humanScore = 0
const computerScore = 0

/**
 * Get computer choice randomly
 *
* * @returns {String}
 */
function getComputerChoice () {
  const choice = Math.floor(Math.random() * 3) + 1
  if (choice === 1) return 'rock'
  else if (choice === 2) return 'paper'
  else return 'scissors'
}

/**
 * Get human choice
 *
 * @returns {String}
 */
function getHumanChoice () {
  while (true) {
    const userInput = prompt('Enter your choice: (Rock/Paper/Scissors)')
    choice = userInput.toLowerCase()
    if (choice === 'rock' || choice === 'paper' || choice === 'scissors') return userInput
	  console.log('Invalid input')
  }
}

/**
 * Play a single round
 *
 * @param {String} humainChoice
 * @param {String} computerChoice
 *
 */
function playRound (humanChoice, computerChoice) {
  if (humanChoice.toLowerCase() === 'rock') {
    if (computerChoice === humanChoice.toLowerCase()) console.log('Draw !')
    else if (computerChoice === 'paper') console.log(`You lost ! ${computerChoice} beats ${humanChoice}.`)
    else {
      console.log(`You win !' ${humanChoice} beats ${computerChoice}.`)
      humanScore += 5
    }
  } else if (humanChoice.toLowerCase() === 'paper') {
    if (computerChoice === humanChoice) console.log('Draw !')
    else if (computerChoice === 'scissors') console.log(`You lost ! ${computerChoice} beats ${humanChoice}.`)
    else {
      console.log(`You win !' ${humanChoice} beats ${computerChoice}.`)
      humanScore += 5
    }
  } else if (humanChoice.toLowerCase() === 'scissors') {
    if (computerChoice == humanChoice.toLowerCase()) console.log('Draw !')
    else if (computerChoice === 'rock') console.log(`You lost ! ${computerChoice} beats ${humanChoice}.`)
    else {
      console.log(`You win !' ${humanChoice} beats ${computerChoice}.`)
      humanScore += 5
    }
  }
}
