'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  console.log(data)
  console.log('Successfully Signed Up!')
  $('#message').text('Successfully Signed Up!')
  $('#message').delay(5000).fadeOut('slow')
  $('#sign-up').hide()
}

const signUpFailure = function (error) {
  console.error(error)
  $('#message').text('You Failed at that sign up.')
  $('#message').delay(5000).fadeOut('slow')
}
const signInFailure = function (error) {
  console.error(error)
  $('#message').text('You Failed at that signing in.')
  $('#message').delay(5000).fadeOut('slow')
}
const signInSuccess = function (data) {
  console.log(data)
  console.log('Successfully Signed in, YO!')
  $('#message').text('Successfully Signed in!')
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
  $('#message').text('Password Changed Successfully!')
  $('#message').delay(5000).fadeOut('slow')
}

const changePasswordFailure = function () {
  console.log('Error changing password')
  $('#message').text('Error changing password')
  $('#message').delay(5000).fadeOut('slow')
}
const signOutSuccess = function () {
  console.log('sign out successful')
  $('#message').text('sign out successful')
  $('#message').delay(5000).fadeOut('slow')
  store.user = null
  store.game = null
}
const signOutFailure = function () {
  console.log('Error signing out')
  $('#message').text('Error signing out')
}
const getGamesSuccess = function (data) {
  console.log(data)
  console.log('You got all the games')
  $('#message').text('data')
  $('#message').delay(5000).fadeOut('slow')
}

const getGamesFailure = function (error) {
  console.error(error)
  $('#message').text('You Failed At Getting All The Games')
}
const createNewGameSuccess = function (data) {
  console.log('new game created')
  console.log(data)
  store.gameStore = data.game.id
}

const createNewGameFailure = function () {
  console.log('create new game did not work.')
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
  createNewGameFailure
}
