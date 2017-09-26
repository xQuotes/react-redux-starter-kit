import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Provider } from 'mobx-react'

import Root from './containers/Root'
import store from './stores/index'

ReactDOM.render(
  <Provider {...store}>
    <Root />
  </Provider>,
  document.getElementById('example'),
)
