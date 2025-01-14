/**
 * Rock Paper Scissors Game
 */

/**
 * Get computer choice randomly
 */
function getComputerChoice () {
  const choice = Math.floor(Math.random() * 3) + 1

  if (choice === 1) {
    return 'Rock'
  } else if (choice === 2) {
    return 'Paper'
  } else return 'Scissors'
}
