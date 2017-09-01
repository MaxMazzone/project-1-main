'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  console.log(data)
  console.log('Successfully Signed Up!')
  $('#message').text('Successfully Signed Up!')
}

const signUpFailure = function (error) {
  console.error(error)
  $('#message').text('You Failed at that sign up.')
}
const signInFailure = function (error) {
  console.error(error)
  $('#message').text('You Failed at that signing in.')
}
const signInSuccess = function (data) {
  console.log(data)
  console.log('Successfully Signed in, YO!')
  $('#message').text('Successfully Signed in!')
  store.user = data.user
}
const changePasswordSuccess = function () {
  console.log('changed password!')
  $('#message').text('Password Changed Successfully!')
}

const changePasswordFailure = function () {
  console.log('Error changing password')
  $('#message').text('Error changing password')
}
const signOutSuccess = function () {
  console.log('sign out successful')
  $('#message').text('sign out successful')
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
