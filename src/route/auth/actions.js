export const GET_ME = 'GET_ME'
export const LOGOUT = 'LOGOUT'

import Api from 'Api'

export function getMe(formData) {
  return {
    type: GET_ME,
    url: Api.getMe,
    method: 'post',
    success: (data, dispatch, getState) => {
      return {...data}
    }
  }
}

export function logout(formData) {
  return {
    type: LOGOUT,
    url: Api.logout,
    method: 'post',
    success: (data, dispatch, getState) => {
      return {...data}
    }
  }
}