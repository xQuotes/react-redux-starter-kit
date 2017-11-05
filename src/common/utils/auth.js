import { browserHistory } from 'react-router'
import cookie from 'react-cookie'

import Url from 'Url'
import Api from 'Api'

const Auth = {}

Auth.redirectToLogin = function(nextState, replace) {
  console.log(Auth.loggedIn())
  if (!Auth.loggedIn()) {
    replace({
      pathname: Url.login,
      state: {
        nextPathname: nextState.location.pathname
      }
    })
  }
}
Auth.redirectToIndex = function(nextState, replace) {
  if (Auth.loggedIn()) {
    replace(Url.index)
  }
}
Auth.redirectIndex = function(nextState, replace) {
  replace(Url.index)
}
Auth.remenber = function(auth) {
  if (!!auth) {
    localStorage.nickname = auth.nickName || ''
    localStorage.accessToken = auth.accessToken || ''
    localStorage.userId = auth.userId || ''
    localStorage.expiersTime = auth.expiersTime || ''

    if (Auth.loggedIn()) {
      browserHistory.push(Url.index)
      return
    }
  } else {
    Auth.logout()
  }
}
Auth.login = function(auth) {
  if (!!auth) {
    sessionStorage.nickname = auth.nickName || ''
    sessionStorage.accessToken = auth.accessToken || ''
    sessionStorage.userId = auth.userId || ''
    sessionStorage.expiersTime = auth.expiersTime || ''

    if (Auth.loggedIn()) {
      browserHistory.push(Url.index)
      return
    }
  } else {
    Auth.logout()
  }
}
Auth.getToken = function() {
  return localStorage.accessToken || sessionStorage.accessToken
}
Auth.getUserName = function() {
  return localStorage.nickname || sessionStorage.nickname
}
Auth.getUid = function() {
  return localStorage.userId || sessionStorage.userId
}
Auth.hasAuth = function(uid) {
  return localStorage.userId == uid || sessionStorage.userId == uid
}
Auth.logout = function() {
  delete localStorage.nickname
  delete localStorage.accessToken
  delete localStorage.userId
  delete localStorage.expiersTime

  delete sessionStorage.nickname
  delete sessionStorage.accessToken
  delete sessionStorage.userId
  delete localStorage.expiersTime

  browserHistory.push(Url.login)
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
    location.href = Api.login + '?url=' + encodeURI(urlHref)
  }
}
Auth.loggedIn = function() {
  return !!localStorage.accessToken || !!sessionStorage.accessToken
}
Auth.checkAuthLogin = function() {
  let urlHref = location.href
  if (!(!!localStorage.accessToken || !!sessionStorage.accessToken)) {
    location.href = Url.login + '?url=' + encodeURI(urlHref)
  } else {
  }
}

export default Auth
