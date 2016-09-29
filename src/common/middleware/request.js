import reqwest from 'reqwest'
// import { alertError } from 'Fetch'
import Auth from 'Auth'

export default ({ dispatch, getState }) => next => action => {
  if (action.url && action.method) {
    const loop = (data) => data
    const { type } = action
    const successCb = action.success || loop
    const errorCb = action.error || loop
    dispatch({ type: `${type}_REQUEST` })
    
    reqwest({
      url: action.url,
      method: action.method,
      contentType: 'application/json',
      headers: {
        AuthToken: Auth.getAuthCookie('UserIfosSession') || '',
      },
      data: JSON.stringify(action.data),
      type: 'json',
      success: (res) => {
        if (res.statuscode === 200) {
          dispatch({
            type: `${type}_RECEIVE`,
            data: successCb(res.data, dispatch, getState),
          })
        } else {
          alert(res.msg)

          dispatch({
            type: `${type}_RECEIVE`, //`${type}_ERROR`,
            data: errorCb(res.data, dispatch, getState),
          })
        }
      },
      error: (err) => {
        console.log(err)
        // dispatch({ type: 'SERVER_ERROR' })
        dispatch({type: `${type}_RECEIVE`})
        alert('服务器出错')
      }
    })
  }
  return next(action)
}
