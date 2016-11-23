import {
  browserHistory,
} from 'react-router'
import cookie from 'react-cookie'

import Url from '../../route/url'
import Api from '../../api/'

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
Auth.redirectIndex = function (nextState, replace) {
  replace(Url.index)
}
Auth.remenber = function(auth) {
  if(!!auth) {
    localStorage.username = auth.username || ''
    localStorage.token = auth.token || ''
    localStorage.user_id = auth.id || ''
    
    if (Auth.loggedIn()) {
      browserHistory.goBack()
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
      browserHistory.goBack()
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
  
  browserHistory.goBack()
}
Auth.removeAuthCookie = function(name, options) {
  cookie.remove(name, options)
}
Auth.getAuthCookie = function(name) {
  return cookie.load(name)
}
Auth.checkAuthCookie = function(name) {
  let urlHref = location.href

  if (!Auth.getAuthCookie(name)) {
    location.href = Api.login+"?url="+encodeURI(urlHref)
  }
}
Auth.loggedIn = function () {
  return !!localStorage.username || !!sessionStorage.username
}

export default Auth
