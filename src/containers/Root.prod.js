import React from 'react'
import {
  connect,
  Provider
} from 'react-redux'
import {
  hashHistory
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
    const history = syncHistoryWithStore(hashHistory, store)
    return(
      <Provider store={store}>
        <div className="root">
          <Root history={history}/>
        </div>
      </Provider>
      )
  }
}