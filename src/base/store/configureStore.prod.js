import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'

import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import commonRequest from '../../common/middleware/request'


const finalCreateStore = compose(
  applyMiddleware(thunk),
  applyMiddleware(commonRequest)
)(createStore)


export default function configureStore(initialState) {
  return finalCreateStore(rootReducer, initialState)
}
