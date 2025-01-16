/**
 * Rock Paper Scissors Game
 */

/**
 * Get computer choice randomly
 *
* * @returns {String}
 */
function getComputerChoice () {
  const choice = Math.floor(Math.random() * 3) + 1

  if (choice === 1) return 'Rock'
  else if (choice === 2) return 'Paper'
  else return 'Scissors'
}

/**
 * Get human choice
 *
 * @returns {String}
 */
function getHumanChoice () {
  console.log(`
  1. Rock
  2. Paper
  3. Scissors`)
  let choice = ''
  while (true) {
    choice = Number(prompt('Enter your choice:'))
    if (choice == 1) return 'Rock'
    else if (choice == 2) return 'Paper'
    else if (choice == 3) return 'Scissors'
    else console.log('Invalid input')
  }
}
