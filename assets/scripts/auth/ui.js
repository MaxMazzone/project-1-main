'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  console.log(data)
  console.log('Successfully Signed Up!')
  $('#message').text('Successfully Signed Up!')
  $('#message').delay(5000).fadeOut('slow')
  $('#sign-up').trigger('reset')
  $('#sign-up').hide()
}

const signUpFailure = function (error) {
  console.error(error)
  $('#message').show()
  $('#message').text('You Failed at that sign up.')
  $('#message').delay(5000).fadeOut('slow')
}
const signInFailure = function (error) {
  console.error(error)
  $('#message').show()
  $('#message').text('You Failed at that signing in.')
  $('#message').delay(5000).fadeOut('slow')
}
const signInSuccess = function (data) {
  console.log(data)
  console.log('Successfully Signed in, YO!')
  $('#message').show()
  $('#message').text('Successfully Signed in!')
  $('#sign-in').trigger('reset')
  $('#message').delay(5000).fadeOut('slow')
  store.user = data.user
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('.container').show()
  $('#reset-game').show()
  $('#sign-out').show()
}
const changePasswordSuccess = function () {
  console.log('changed password!')
  $('#message').show()
  $('#message').text('Password Changed Successfully!')
  $('#message').delay(5000).fadeOut('slow')
}

const changePasswordFailure = function () {
  console.log('Error changing password')
  $('#message').show()
  $('#message').text('Error changing password')
  $('#message').delay(5000).fadeOut('slow')
}
const signOutSuccess = function () {
  console.log('sign out successful')
  $('#message').show()
  $('#message').text('sign out successful')
  $('#message').delay(5000).fadeOut('slow')
  store.user = null
  store.game = null
  $('#sign-in').show()
  $('#sign-up').show()
  $('.container').hide()
  $('#reset-game').hide()
  $('#sign-out').hide()
}
const signOutFailure = function () {
  console.log('Error signing out')
  $('#message').show()
  $('#message').text('Error signing out')
  $('#message').delay(5000).fadeOut('slow')
}
const getGamesSuccess = function (data) {
  console.log(data)
  console.log('You got all the games')
  $('#message').text('data')
  $('#message').delay(5000).fadeOut('slow')
}

const getGamesFailure = function (error) {
  console.error(error)
  $('#message').show()
  $('#message').text('You Failed At Getting All The Games')
  $('#message').delay(5000).fadeOut('slow')
}
const createNewGameSuccess = function (data) {
  console.log('new game created')
  console.log(data)
  store.gameStore = data.game.id
}

const createNewGameFailure = function () {
  console.log('create new game did not work.')
}
const sayWhosUp = function (userTurn) {
  console.log(userTurn)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInFailure,
  signInSuccess,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  getGamesSuccess,
  getGamesFailure,
  createNewGameSuccess,
  createNewGameFailure,
  sayWhosUp
}
