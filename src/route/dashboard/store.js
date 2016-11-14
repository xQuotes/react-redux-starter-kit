import {
  observable, computed, reaction, action
} from 'mobx'

import Api from 'Api'
import Url from 'Url'
import Fetch from 'Fetch'

export default class DashboardStore {
  @observable bcData = []
  name = 'DEMO 系统'
  menus = [{
    subMenu: {
      name: '数据库管理',
      icon: 'bars'
    },
    menuItem: [{
      url: Url.cmdbTables,
      name: '表单管理',
      icon: 'appstore-o'
    }]
  }]
  
  @action putDashboard(formData) {
    this.bcData = formData
  }

  static fromJS() {
    return new DashboardStore()
  }
}