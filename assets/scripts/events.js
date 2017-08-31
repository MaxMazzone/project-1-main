const gameLogic = require('./gamelogic.js')

$(() => {
  $('.container').find('.coord').on('click', gameLogic.runGame)
  $('#reset-game').on('submit', gameLogic.resetGame)
})
