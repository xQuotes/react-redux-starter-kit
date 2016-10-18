import "./style/app.less"

import Root from './containers/index'

import UserStore from './stores/UserStore'

ReactDOM.render(
  (<Root userStore={UserStore.fromJS()}/>),
  document.getElementById('react')
)