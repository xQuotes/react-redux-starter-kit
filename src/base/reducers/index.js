import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import reducers from '../../route/reducers'

// modal

const rootReducer = combineReducers({
  routing: routerReducer,
  ...reducers
})

export default rootReducer