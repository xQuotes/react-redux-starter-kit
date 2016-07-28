import {
  hashHistory,
} from 'react-router'

import Url from 'Url'

const Auth = {}

Auth.redirectToLogin = function (nextState, replace) {
  if (!Auth.loggedIn()) {
    replace({
      pathname: Url.register,
      state: {
        nextPathname: nextState.location.pathname,
      },
    })
  }
}
Auth.redirectToIndex = function (nextState, replace) {
  if (Auth.loggedIn()) {
    replace(Url.index)
  }
}
Auth.remenber = function(auth) {
  if(!!auth) {
    localStorage.username = auth.username || ''
    localStorage.token = auth.token || ''
    localStorage.user_id = auth.id || ''
    
    if (Auth.loggedIn()) {
      hashHistory.goBack()
      return
    }
  } else {
    Auth.logout()
  }
}
Auth.login = function(auth) {
  if(!!auth) {
    sessionStorage.username = auth.username || ''
    sessionStorage.token = auth.token || ''
    sessionStorage.user_id = auth.id || ''

    if (Auth.loggedIn()) {
      hashHistory.goBack()
      return
    }
  } else {
    Auth.logout()
  }
}
Auth.getToken = function () {
  return localStorage.token || sessionStorage.token
}
Auth.getUser = function () {
  return localStorage.username || sessionStorage.username
}
Auth.getUid = function () {
  return localStorage.user_id || sessionStorage.user_id
}
Auth.hasAuth = function (uid) {
  return localStorage.user_id == uid || sessionStorage.user_id == uid
}
Auth.logout = function () {
  delete localStorage.token
  delete localStorage.username
  delete localStorage.user_id

  delete sessionStorage.token
  delete sessionStorage.username
  delete sessionStorage.user_id
  
  hashHistory.goBack()
}
Auth.loggedIn = function () {
  return !!localStorage.username || !!sessionStorage.username
}

export default Auth
