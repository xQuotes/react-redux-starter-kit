import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import dashboard from '../route/dashboard/reducers'
import me from '../route/auth/reducers'
import SBackup from '../route/switches/backup/reducers'
import Actions from '../route/switches/actions/reducers'
import SNetwork from '../route/switches/network/reducers'
import SMapping from '../route/switches/mapping/reducers'

// modal

const rootReducer = combineReducers({
  routing: routerReducer,
  dashboard,
  me,
  SBackup,
  Actions,
  SNetwork,
  SMapping
})

export default rootReducer