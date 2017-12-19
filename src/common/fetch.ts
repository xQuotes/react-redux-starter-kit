require('es6-promise').polyfill()
require('isomorphic-fetch')
import queryString from 'query-string'

export default function fetching(action: {
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
    // withCredentials: true,
    // crossOrigin: true,
    headers: {
      'Content-Type': action.contentType || 'application/json'
      // AuthToken: Auth.getAuthCookie('UserIfosSession') || ''
    },
    // credentials: 'same-origin',
    body: JSON.stringify(action.data)
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
