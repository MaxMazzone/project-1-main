const gameArray = [null, null, null, null, null, null, null, null, null]
console.log(gameArray)
let userTurn = 'x'
let thereIsWinner = false
const addTokenToArray = function (userClick, userTurn) {
  gameArray[userClick - 1] = userTurn
  return gameArray
}
const putGamePiece = function (id) {
  $('#' + id).text(userTurn)
}

const changeTurn = function () {
  if (userTurn === 'x') {
    userTurn = 'o'
  } else {
    userTurn = 'x'
  }
  return userTurn
}

const checkForWinner = function (userTurn) {
  let result = false
  if (checkRow(1, 2, 3, userTurn) ||
     checkRow(4, 5, 6, userTurn) ||
     checkRow(7, 8, 9, userTurn) ||
     checkRow(1, 4, 7, userTurn) ||
     checkRow(2, 5, 8, userTurn) ||
     checkRow(3, 6, 9, userTurn) ||
     checkRow(1, 5, 9, userTurn) ||
     checkRow(3, 5, 7, userTurn)) {
    result = true
    if (result === true) {
      thereIsWinner = true
      console.log(thereIsWinner)
    }
    console.log('there is a winner' + result)
  }
  return result
}

const checkRow = function checkRow (a, b, c, userTurn) {
  let result = false
  if (gameArray[a - 1] === userTurn && gameArray[b - 1] === userTurn && gameArray[c - 1] === userTurn) {
    result = true
  }
  return result
}

const runGame = function () {
  if (thereIsWinner === false) {
    const id = this.id
    if (gameArray[this.id - 1] === null) {
      if (userTurn === 'x') {
        putGamePiece(id)
        addTokenToArray(this.id, userTurn)
        checkForWinner(userTurn)
        changeTurn()
        console.log(gameArray)
      } else {
        putGamePiece(id)
        addTokenToArray(this.id, userTurn)
        checkForWinner(userTurn)
        changeTurn()
        console.log(gameArray)
      }
    } else if (gameArray[this.id - 1] !== null) {
      console.log('invalid move')
      console.log(gameArray)
    }
  } else {
    console.log('There is already a winner')
  }
}

module.exports = {
  userTurn,
  runGame
}
