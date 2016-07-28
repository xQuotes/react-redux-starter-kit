import { Modal } from 'antd'


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