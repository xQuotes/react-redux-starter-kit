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
      icon: 'bars',
      url: ''
    },
    // menuItem: [{
    //   url: Url.cmdbMulsearchs,
    //   name: '综合查询',
    //   icon: 'appstore-o'
    // },{
    //   url: Url.cmdbQuicksearchs,
    //   name: '快速查询',
    //   icon: 'appstore-o'
    // },{
    //   url: Url.cmdbMysettings,
    //   name: '我的设置',
    //   icon: 'appstore-o'
    // }]
  },{
    subMenu: {
      name: '权限管理',
      icon: 'bars',
      url: ''
    },
    // menuItem: [{
    //   url: Url.cmdbIPmanages,
    //   name: 'IP管理',
    //   icon: 'appstore-o'
    // },{
    //   url: Url.cmdbNetworkmanages,
    //   name: '网段管理',
    //   icon: 'appstore-o'
    // }]
  },{
    subMenu: {
      name: '日志管理',
      icon: 'bars',
      url: ''
    },
    // menuItem: [{
    //   url: Url.cmdbIPmanages,
    //   name: 'IP管理',
    //   icon: 'appstore-o'
    // },{
    //   url: Url.cmdbNetworkmanages,
    //   name: '网段管理',
    //   icon: 'appstore-o'
    // }]
  }]
  
  @action putDashboard(formData) {
    this.bcData = formData
  }

  static fromJS() {
    return new DashboardStore()
  }
}