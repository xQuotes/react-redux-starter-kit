export function checkData(rule, value, callback, reg, message) {
  if (!value) {
    callback()
  } else {
    if (!reg.test(value)) {
      callback([new Error(message)]);
    } else {
      callback()
    }
  }
}

export function checkServerData(rule, value, callback, reg, message) {
  if (!value) {
    callback()
  } else {
    if (!reg.test(value)) {
      callback([new Error(message)]);
    } else {
      callback()
    }
  }
}