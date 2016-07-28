import {
  browserHistory,
  hashHistory
} from 'react-router'

var Auth = {}

Auth.redirectToLogin = function(nextState, replace) {
  if (!Auth.loggedIn()) {
    replace({
      pathname: '/index',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}
Auth.redirectToIndex = function(nextState, replace) {
  if (Auth.loggedIn()) {
    replace('/goods')
  }
}
Auth.login = function(auth) {
  if(!!auth) {
    localStorage.email = auth.email
    if (this.loggedIn()) {
      hashHistory.push('/goods')
      return
    }
  } else {
    this.logout()
  }
}

Auth.getToken = function () {
  return localStorage.email
}
Auth.getUser = function () {
  return localStorage.email
}
Auth.logout = function () {
  delete localStorage.email
  hashHistory.push('/index')
  // hashHistory.goBack()
}
Auth.loggedIn = function () {
  return !!localStorage.email
}
Auth.onChange = function () {}

module.exports = Auth;