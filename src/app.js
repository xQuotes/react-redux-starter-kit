import "./style/app.less"
import {
  Provider
} from 'mobx-react'

import Root from './containers/index'

import store from './stores/index'

ReactDOM.render(
  (<Provider {...store}>
    <Root />
  </Provider>),
  document.getElementById('react')
)