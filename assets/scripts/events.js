const putGamePiece = function () {
  $('.coord-1').text('this is working')
  console.log('working in events.js')
}

$(() => {
  $('.coord-1').on('click', putGamePiece)
})
