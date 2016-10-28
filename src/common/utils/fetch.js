import { Modal, message } from 'antd'
import reqwest from 'reqwest'

import Auth from 'Auth'

export default function fetching(action) {
  const loop = (data, msg, statuscode) => data
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
    // data: action.data,
    type: 'json',
    success: (res) => {
      if (res.statuscode === 200) {
        message.success(res.msg);
        return successCb(res.data, res.msg, res.statuscode)
      } else {
        Modal.error({
          title: '',
          content: res.msg
        })
        return errorCb(res.data, res.msg, res.statuscode)
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