const gameLogic = require('./gamelogic.js')
const putGamePiece = function () {
  $('#1').text(gameLogic.userTurn)
  console.log(gameLogic.userTurn)
}

$(() => {
  $('.container').find('.coord').on('click', gameLogic.runGame)
})
