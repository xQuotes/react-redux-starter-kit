import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import user from '../route/login/reducers'

// modal

const rootReducer = combineReducers({
  routing: routerReducer,
  user
})

export default rootReducer