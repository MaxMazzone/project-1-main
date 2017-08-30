const gameArray = [null, null, null, null, null, null, null, null, null]
let userClick = 2
let userTurn = 'x'

if (userClick === 1 && gameArray[userClick - 1] === null) {
  if (userTurn === 'x') {
    console.log('x is in topleft')
    userTurn = 'o'
  } else {
    console.log('o is on topleft')
    userTurn = 'x'
  }
} else if (userClick === 2 && gameArray[userClick - 1] === null) {
  if (userTurn === 'x') {
    console.log('x is in middle left')
    userTurn = 'o'
  } else {
    console.log('o is on middle left')
    userTurn = 'x'
  }
} else if (gameArray[userClick - 1] !== null) {
  console.log('invalid move')
}
