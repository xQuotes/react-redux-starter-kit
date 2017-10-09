import * as ifetch from 'isomorphic-fetch'
import * as es6Promise from 'es6-promise'

es6Promise.polyfill()

interface Options {
  url: string
  [params: string]: any
}

function promise({ url, ...options }: Options) {
  return ifetch(url, {
    method: 'GET',
    ...options
  }).then((response: any) => response.json())
}

export function fetch({ url, ...options }: Options) {
  return promise({ url, ...options })
    .then((data: any) => {
      console.log('request succeeded with JSON response', data)
    })
    .catch((error: any) => {
      console.log('request failed', error)
    })
}

export default promise
