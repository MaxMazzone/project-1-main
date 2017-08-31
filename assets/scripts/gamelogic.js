const gameArray = [null, null, null, null, null, null, null, null, null]
console.log(gameArray)
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

const runGame = function () {
  if (gameArray[this.id - 1] === null) {
    if (userTurn === 'x') {
      addTokenToArray(this.id, userTurn)
      changeTurn()
      console.log(gameArray)
    } else {
      addTokenToArray(this.id, userTurn)
      changeTurn()
      console.log(gameArray)
    }
  } else if (gameArray[this.id - 1] !== null) {
    console.log('invalid move')
    console.log(gameArray)
  }
}

module.exports = {
  userTurn,
  runGame
}
