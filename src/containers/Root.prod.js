import React from 'react'
import {
  connect,
  Provider
} from 'react-redux'
import {
  browserHistory
} from 'react-router'
import {
  syncHistoryWithStore
} from 'react-router-redux'

import Root from './Root'

@connect(() => ({}))
export default class RootPro extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { store } = this.props
    const history = syncHistoryWithStore(browserHistory, store)
    return(
      <Provider store={store}>
        <div>
          <Root history={history}/>
        </div>
      </Provider>
      )
  }
}