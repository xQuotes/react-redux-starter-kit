import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

// modal

const rootReducer = combineReducers({
  routing: routerReducer
})

export default rootReducer