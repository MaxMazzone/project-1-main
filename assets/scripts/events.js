const gameLogic = require('./gamelogic.js')
const putGamePiece = function () {
  $('.coord-1').text(gameLogic.userTurn)
  console.log(gameLogic.userTurn)
}

$(() => {
  $('.coord-1').on('click', putGamePiece)
})
