import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { RouterStore, syncHistoryWithStore } from 'mobx-react-router'

const routingStore = new RouterStore()

import Root from './containers/Root'
import store from './stores/index'

const stores = {
  routing: routingStore,
  ...store
}

ReactDOM.render(<Root store={stores} />, document.getElementById('root'))
