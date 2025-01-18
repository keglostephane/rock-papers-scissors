/**
 * Rock Paper Scissors Game
 */

/**
 * Get computer choice randomly
 *
 * @returns {String}
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
 * @returns {String|Null} The winner of the round otherwise `null` if no winner
 */
function playRound (humanChoice, computerChoice) {
  if (humanChoice.toLowerCase() === 'rock') {
    if (computerChoice === humanChoice.toLowerCase()) {
		  console.log('Draw !')
		  return null
    } else if (computerChoice === 'paper') {
		  console.log(`You lost ! ${computerChoice} beats ${humanChoice}.`)
		  return 'computer'
    } else {
		  console.log(`You win !' ${humanChoice} beats ${computerChoice}.`)
		  return 'human'
    }
  } else if (humanChoice.toLowerCase() === 'paper') {
    if (computerChoice === humanChoice) {
		  console.log('Draw !')
		  return null
    } else if (computerChoice === 'scissors') {
		  console.log(`You lost ! ${computerChoice} beats ${humanChoice}.`)
		  return 'computer'
    } else {
		  console.log(`You win !' ${humanChoice} beats ${computerChoice}.`)
		  return 'human'
    }
  } else if (humanChoice.toLowerCase() === 'scissors') {
    if (computerChoice == humanChoice.toLowerCase()) {
		  console.log('Draw !')
		  return null
    } else if (computerChoice === 'rock') {
		  console.log(`You lost ! ${computerChoice} beats ${humanChoice}.`)
		  return 'computer'
    } else {
		  console.log(`You win !' ${humanChoice} beats ${computerChoice}.`)
		  return 'human'
    }
  }
}

/**
 * Play a full game
 */
function playGame () {
  let computerChoice
  let humanChoice
  let round
  const nRounds = 5
  let winner
  let humanScore = 0
  let computerScore = 0
  const roundScore = 10

  console.log('**************************************')
  console.log('*    Rock - Paper - Scissors Game    *')
  console.log('**************************************')

  round = 1
  while (round <= nRounds) {
    computerChoice = getComputerChoice()
    humanChoice = getHumanChoice()
    console.log(`Round ${round}`)
    winner = playRound(humanChoice, computerChoice)
	  if (winner === 'computer') computerScore += roundScore
	  else if (winner === 'human') humanScore += roundScore
	  else {
		  computerScore += roundScore / 2
		  humanScore += roundScore / 2
	  }
    round++
  }

  if (computerScore > humanScore) console.log('*** Computer WIN !!! ***')
  else if (computerScore < humanScore) console.log('*** You WIN !!! ***')
  else console.log('*** Draw ***')

  console.log(`Score - You: ${humanScore}\t Computer: ${computerScore}`)
}

playGame()
