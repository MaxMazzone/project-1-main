const gameArray = [null, null, null, null, null, null, null, null, null]

const addTokenToArray = function (userClick, userTurn) {
  gameArray[userClick - 1] = userTurn
  return gameArray
}

const runGame = function (userClick, userTurn) {
  if (userClick === 1 && gameArray[userClick - 1] === null) {
    if (userTurn === 'x') {
      addTokenToArray(userClick, userTurn)
      console.log('x is in topleft')
      userTurn = 'o'
    } else {
      addTokenToArray(userClick, userTurn)
      console.log('o is on topleft')
      userTurn = 'x'
    }
  } else if (userClick === 2 && gameArray[userClick - 1] === null) {
    if (userTurn === 'x') {
      addTokenToArray(userClick, userTurn)
      console.log('x is in middle left')
      userTurn = 'o'
    } else {
      addTokenToArray(userClick, userTurn)
      console.log('o is on middle left')
      userTurn = 'x'
    }
  } else if (gameArray[userClick - 1] !== null) {
    console.log('invalid move')
  }
}
