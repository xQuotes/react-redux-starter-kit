import {
  createStore,
  applyMiddleware
} from 'redux'

import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const finalCreateStore = applyMiddleware(thunk)

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, finalCreateStore)
}