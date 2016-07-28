import reqwest from 'reqwest'
import { alertError } from 'Fetch'
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
      headers: {
        AuthToken: Auth.getToken() || '',
      },
      data: action.data,
      type: 'json',
      success: (res) => {
        if (res.code === 200) {
          dispatch({
            type: `${type}_RECEIVE`,
            data: successCb(res.data, dispatch, getState),
          })
        } else {
          alertError(res.message)

          dispatch({
            type: `${type}_ERROR`,
            data: errorCb(res.data, dispatch, getState),
          })
        }
      },
      error: () => {
        dispatch({ type: 'SERVER_ERROR' })
        alertError('服务器出错')
      },
    })
  }
  return next(action)
}
