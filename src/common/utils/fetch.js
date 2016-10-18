import { Modal } from 'antd'
import reqwest from 'reqwest'

import Auth from 'Auth'

export default function fetching(action) {
  const loop = (data, message, code) => data
  const successCb = action.success || loop
  const errorCb = action.error || loop
  
  reqwest({
    url: action.url,
    method: action.method || 'post',
    contentType: 'application/json',
    headers: {
      AuthToken: Auth.getAuthCookie('UserIfosSession') || '',
    },
    data: JSON.stringify(action.data),
    type: 'json',
    success: (res) => {
      if (res.code === 200) {
        return successCb(res.data, res.message, res.code)
      } else {
        alert(res.message)
        return errorCb(res.data, res.message, res.code)
      }
    },
    error: (err) => {
      alert('服务器出错')
    }
  })
}

export function fetchResult(result, callback, errorCallback) {
  if(result.code == 0) {
    callback()
  } else {
    errorCallback()
     Modal.error({
      title: '',
      content: result.message
    })
  }
}

export function fetchResultError(result) {
  Modal.error({
    title: '',
    content: result.message
  })
}