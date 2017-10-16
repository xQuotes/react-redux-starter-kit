import { Modal } from 'antd'

export function createReducer (initialState, handlers) {
    return function reducer(state = initialState, action) {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action)
        } else {
            return state
        }
    }
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

export function errorAlert(message) {
  Modal.error({
    title: '',
    content: message
  })
}


