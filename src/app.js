import "./style/app.less"
import {
  Provider
} from 'mobx-react'

// String特殊方法不兼容问题
import 'Str'
import Root from './containers/index'

import store from './stores/index'

ReactDOM.render(
  (<Provider {...store}>
    <Root />
  </Provider>),
  document.getElementById('react')
)