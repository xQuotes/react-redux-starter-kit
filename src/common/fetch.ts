import ifetch from 'isomorphic-fetch'

require('es6-promise').polyfill()

interface Options {
  url: string
  [params: string]: any
}

function promise({ url: string, ...options }: Options) {
  return ifetch(
    url,
    Object.assign(
      {},
      {
        method: 'GET',
        header: {
          'Content-Type': 'application/json'
        }
      },
      options
    )
  ).then(response => response.json())
}

function fetch({ url: string, ...options }) {
  return promise({ url, ...options })
    .then(data => {
      console.log('request succeeded with JSON response', data)
    })
    .catch(error => {
      console.log('request failed', error)
    })
}

export default promise
