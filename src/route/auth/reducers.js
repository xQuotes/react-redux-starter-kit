let Utils = require('Utils')
let createReducer = Utils.createReducer
import _ from 'lodash'

import {
  GET_ME,
  LOGOUT
} from './actions'

let initialState = {
  isFetching: false,
  data: {

  }
}

export default createReducer(initialState, {
  [GET_ME+'_REQUEST']: (state, action) => {
    state.isFetching = true
    return _.assign({}, state)
  },
  [GET_ME+'_RECEIVE']: (state, action) => {
    state.isFetching = false
    return _.assign({}, state, action)
  },
  [LOGOUT+'_REQUEST']: (state, action) => {
    state.isFetching = true
    return _.assign({}, state)
  },
  [LOGOUT+'_RECEIVE']: (state, action) => {
    state.isFetching = false
    return _.assign({}, state, action)
  },
})
