require('es6-promise').polyfill()
require('isomorphic-fetch')

export default function fetching(action: {
  url: string
  method?: string
  contentType?: string
  data: object
  success?(response: any): () => {}
  error?(response: any): () => {}
}) {
  // const errorCb = action.error || loop

  const loop = (data: any) => data
  const successCb = action.success || loop
  const errorCb = action.error || loop

  return fetch(action.url, {
    method: action.method || 'post',
    // contentType: action.contentType || 'application/json', // 'application/x-www-form-urlencoded',
    // withCredentials: true,
    // crossOrigin: true,
    headers: {
      'Content-Type': action.contentType || 'application/json'
      // AuthToken: Auth.getAuthCookie('UserIfosSession') || ''
    },
    credentials: 'same-origin',
    body: JSON.stringify(action.data)
  }).then(
    response => {
      return successCb(response)
    },
    error => {
      console.log(error.message) //=> String
      return errorCb(error)
    }
  )
}
