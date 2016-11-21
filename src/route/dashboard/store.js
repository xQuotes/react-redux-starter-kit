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
      name: '表单管理',
      icon: 'bars'
    },
    menuItem: [{
      url: Url.cmdbTables,
      name: '表单列表',
      icon: 'appstore-o'
    }]
  },{
    subMenu: {
      name: '权限管理',
      icon: 'bars'
    },
    menuItem: [{
      url: Url.cmdbPermissions,
      name: '权限列表',
      icon: 'appstore-o'
    }]
  },{
    subMenu: {
      name: '日志管理',
      icon: 'bars'
    },
    menuItem: [{
      url: Url.cmdbLogs,
      name: '日志列表',
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