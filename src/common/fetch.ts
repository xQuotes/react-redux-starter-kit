import { Modal } from 'antd'
import reqwest from 'reqwest'
// require('es6-promise').polyfill()
// require('isomorphic-fetch')
import queryString from 'query-string'

// import Auth from 'Auth'

export default function fetching(action: any) {
  const loop = (data: any, msg: any, statuscode: any) => data
  const successCb = action.success || loop
  // const errorCb = action.error || loop

  return reqwest({
    url: action.url,
    method: action.method || 'post',
    contentType: action.contentType || 'application/x-www-form-urlencoded', //'application/json',
    // withCredentials: true,
    crossOrigin: true,
    headers: {
      AuthToken: '' //Auth.getAuthCookie('UserIfosSession') || ''
    },
    data: JSON.stringify(action.data),
    type: 'json',
    success: (res: any) => {
      if (res.code <= 0) {
        Modal.error({
          title: '',
          content: res.message
        })
      } else {
        return successCb(res)
      }
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
    error: (err: any) => {
      alert('服务器出错')
    }
  })
}


export function fetchs(action: {
  url: string
  method?: string
  contentType?: string
  data: object
  success?(response: any): () => {}
  error?(response: any): () => {}
}) {
  // const errorCb = action.error || loop
  // console.log(action)
  const loop = (data: any) => data
  const successCb = action.success || loop
  const errorCb = action.error || loop
  let options = {
    method: action.method || 'post',
    // contentType: action.contentType || 'application/json', // 'application/x-www-form-urlencoded',
    withCredentials: true,
    crossOrigin: true,
    headers: {
      'Content-Type': action.contentType || 'application/x-www-form-urlencoded', //'application/json'
      Accept: 'application/json, text/javascript',
      'Accept-Encoding': 'gzip, deflate',
      AuthToken: ''
    },
    // credentials: 'same-origin',
    body: queryString.stringify(action.data)
  }

  if (options.method === 'get') {
    delete options.body
    action.url = action.url + '?' + queryString.stringify(action.data || {})
  }

  return fetch(action.url, options).then(
    response => {
      // console.log(response)
      return successCb(response)
    },
    error => {
      console.log(error)
      return errorCb(error)
    }
  )
}
