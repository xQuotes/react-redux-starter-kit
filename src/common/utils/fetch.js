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
    contentType: action.contentType || 'application/json',
    // withCredentials: true,
    // crossOrigin: true,
    headers: {
      AuthToken: Auth.getAuthCookie('UserIfosSession') || ''
    },
    data: action.data,
    type: 'json',
    success: res => {
      return successCb(res)
      // if (res.statuscode === 200) {
      //   message.success(res.msg);
      //   return successCb(res.data, res.msg, res.statuscode)
      // } else if (res.statuscode === 401) {
      //   Modal.error({
      //     title: '',
      //     content: res.msg,
      //     onOk() {

      //     }
      //   })
      //   return errorCb(res.data, res.msg, res.statuscode)
      // } else {
      //   Modal.error({
      //     title: '',
      //     content: res.msg
      //   })
      //   return errorCb(res.data, res.msg, res.statuscode)
      // }
    },
    error: err => {
      alert('服务器出错')
    }
  })
}
