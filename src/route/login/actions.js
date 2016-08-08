export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

import Api from 'Api'

import Auth from 'Auth'

export function login(formData) {
  // 没有接口
  formData = {
    username: 'fuyin',
    token: 'fuyin',
    user_id: '1'
  }
  Auth.login(formData)
  return;

  return {
    type: LOGIN,
    url: Api.login,
    method: 'post',
    data: {
     username: formData.name,
     password: formData.pass
    },
    success: (data, dispatch, getState) => {
      formData.agreement ? Auth.remenber(data) : Auth.login(data)
      return {...data}
    },
    error: (data, dispatch, getState) => {
      return {...data}
    }
  }
}


export function logout(formData) {
  // 没有接口
  console.log('11')
  Auth.logout()
  return;

  return {
    type: LOGOUT,
    url: Api.logout,
    method: 'get',
    data: {
      user_id: Auth.getUid()
    },
    success: (data, dispatch, getState) => {
      Auth.logout()
      return data
    }
  }
}