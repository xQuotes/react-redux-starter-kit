let Utils = require('Utils')
let createReducer = Utils.createReducer
import _ from 'lodash'

import {
  URL_CHANGE
} from './actions'

let initialState = {
  bcData: {},
  menuData: {}
}

export default createReducer(initialState, {
  [URL_CHANGE]: (state, action) => {
    return _.assign({}, state, action)
  }
})
