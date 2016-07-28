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

import DevTools from './DevTools'
import Root from './Root'

@connect(() => ({}))
export default class RootDev extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { store } = this.props
    const history = syncHistoryWithStore(browserHistory, store)
    return(
      <Provider store={store}>
        <div className="root">
          <Root history={history}/>
          <DevTools />
        </div>
      </Provider>
      )
  }
}