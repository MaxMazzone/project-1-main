'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  console.log(data)
  console.log('Successfully Signed Up, YO!')
  $('#message').text('Successfully Signed Up, YO!')
}

const signUpFailure = function (error) {
  console.error(error)
  $('#message').text('You Failed at that sign up :(')
}
const signInFailure = function (error) {
  console.error(error)
  $('#message').text('You Failed at that signing in :(')
}
const signInSuccess = function (data) {
  console.log(data)
  console.log('Successfully Signed in, YO!')
  $('#message').text('Successfully Signed Up, YO!')
  store.user = data.user
}
const changePasswordSuccess = function () {
  console.log('changed password!')
  $('#message').text('Changed Password!')
}

const changePasswordFailure = function () {
  console.log('Error changing password')
  $('#message').text('Error changing password')
}
const signOutSuccess = function () {
  console.log('sign out successful')
  $('#message').text('sign out successful')
  store.user = null
}
const signOutFailure = function () {
  console.log('Error signing out')
  $('#message').text('Error signing out')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInFailure,
  signInSuccess,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
