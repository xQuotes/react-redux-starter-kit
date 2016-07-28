import { Modal } from 'antd'


export function fetchResult(result, callback) {
  if (result.code === 200) {
    callback()
  } else if (result.code === 0) {
    Modal.error({
      title: '',
      content: result.msg,
    })
  } else {
    Modal.error({
      title: '',
      content: '服务器出错',
    })
  }
}

export function alertError(msg) {
  Modal.error({
    title: '',
    content: msg,
  })
}

export function alertSuccess(msg) {
  Modal.success({
    title: '',
    content: msg,
  })
}
