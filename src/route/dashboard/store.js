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
      name: '设备资源',
      icon: 'bars'
    },
    menuItem: [{
      url: Url.cmdbMulsearchs,
      name: '综合查询',
      icon: 'appstore-o'
    },{
      url: Url.cmdbQuicksearchs,
      name: '快速查询',
      icon: 'appstore-o'
    },{
      url: Url.cmdbMysettings,
      name: '我的设置',
      icon: 'appstore-o'
    }]
  },{
    subMenu: {
      name: '网络资源',
      icon: 'bars'
    },
    menuItem: [{
      url: Url.cmdbIPmanages,
      name: 'IP管理',
      icon: 'appstore-o'
    },{
      url: Url.cmdbNetworkmanages,
      name: '网段管理',
      icon: 'appstore-o'
    }]
  },{
    subMenu: {
      name: '连接关系',
      icon: 'bars'
    },
    menuItem: [{
      url: Url.cmdbConnections,
      name: '综合查询',
      icon: 'appstore-o'
      }]
    },{
    subMenu: {
      name: '机房信息',
      icon: 'bars'
    },
    menuItem: [{
      url: Url.cmdbIdcmessages,
      name: '机房信息',
      icon: 'appstore-o'
    },{
      url: Url.cmdbCabinetmessages,
      name: '机柜信息',
      icon: 'appstore-o'
    },{
      url: Url.cmdbSpaceshows,
      name: '空间展示',
      icon: 'appstore-o'
      }]
    },{
    subMenu: {
      name: '配置信息',
      icon: 'bars'
    },
    menuItem: [{
      url: Url.cmdbProductions,
      name: '产品线信息',
      icon: 'appstore-o'
    },{
      url: Url.cmdbDevicuses,
      name: '设备用途信息',
      icon: 'appstore-o'
    },{
      url: Url.cmdbServermessages,
      name: '服务信息',
      icon: 'appstore-o'
    },{
      url: Url.cmdbApplymessages,
      name: '应用信息',
      icon: 'appstore-o'
    },{
      url: Url.cmdbSoftwarepackages,
      name: '软件信息',
      icon: 'appstore-o'
      }]
    },{
    subMenu: {
      name: '用户信息',
      icon: 'bars'
    },
    menuItem: [{
      url: Url.cmdbAuthsearchs,
      name: '权限查询',
      icon: 'appstore-o'
    },{
      url: Url.cmdbInstructions,
      name: '使用说明',
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