import './style/app.less'

import Root from './base/containers/index'

import configureStore from './base/store/configureStore'
const store = configureStore()

ReactDOM.render(
  (<Root store={store} />),
  document.getElementById('react')
)
