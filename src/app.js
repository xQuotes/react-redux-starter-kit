import "./style/app.less"
import {
  Provider
} from 'mobx-react'

import Root from './containers/index'

import UserStore from './stores/UserStore'
import DashboardStore from './stores/DashboardStore'
import BackupStore from './stores/BackupStore'

ReactDOM.render(
  (<Provider userStore={UserStore.fromJS()}
      dashboardStore={DashboardStore.fromJS()}
      backupStore={BackupStore.fromJS()}>
    <Root />
  </Provider>),
  document.getElementById('react')
)