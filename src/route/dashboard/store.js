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
      name: 'DEMO 1',
      icon: 'bars'
    },
    menuItem: [{
      url: Url.item1,
      name: 'ITEM 1',
      icon: 'appstore-o'
    }, {
      url: Url.item2,
      name: 'ITEM 2',
      icon: 'appstore-o'
    }]
  }, {
    subMenu: {
      name: 'DEMO 1',
      icon: 'bars'
    },
    menuItem: [{
      url: Url.item3,
      name: 'ITEM 1',
      icon: 'appstore-o'
    }, {
      url: Url.item4,
      name: 'ITEM 2',
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