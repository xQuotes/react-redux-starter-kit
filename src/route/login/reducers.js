let Utils = require('Utils')
let createReducer = Utils.createReducer
import _ from 'lodash'

import {
  LOGIN,
  LOGOUT
} from './actions'

let initialState = {
  isFetching: false,
  username: '',
  token: ''
}

export default createReducer(initialState, {
  [LOGIN+'_REQUEST']: (state, action) => {
    state.isFetching = true
    return _.assign({}, state, action)
  },
  [LOGIN+'_RECEIVE']: (state, action) => {
    state.isFetching = false
    return _.assign({}, state, action)
  },
  [LOGOUT+'_REQUEST']: (state, action) => {
    state.isFetching = true
    return _.assign({}, state, action)
  },
  [LOGOUT+'_RECEIVE']: (state, action) => {
    state.isFetching = false
    return _.assign({}, state, action)
  }
})