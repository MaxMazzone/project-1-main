const gameArray = [null, null, null, null, null, null, null, null, null]

let userTurn = 'x'

const addTokenToArray = function (userClick, userTurn) {
  gameArray[userClick - 1] = userTurn
  return gameArray
}

const changeTurn = function () {
  if (userTurn === 'x') {
    userTurn = 'o'
  } else {
    userTurn = 'x'
  }
  return userTurn
}

const runGame = function (userClick, userTurn) {
  if (gameArray[userClick - 1] === null) {
    if (userTurn === 'x') {
      addTokenToArray(userClick, userTurn)
      changeTurn()
    } else {
      addTokenToArray(userClick, userTurn)
      changeTurn()
    }
  } else if (gameArray[userClick - 1] !== null) {
    console.log('invalid move')
  }
}

module.exports = {
  userTurn
}
