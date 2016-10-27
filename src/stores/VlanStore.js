import {
  observable, computed, action
} from 'mobx'

import Fetch from 'Fetch'
import Api from 'Api'

export default class VlanStore {
  @observable isLoading = false
  @observable vlans = []
  searchDatas = {}

  @action getServers(formData) {
    this.isLoading = true
    this.setSearchDatas(formData)
    
    Fetch({
      url: Api.getVlans,
      data: formData,
      method: 'post',
      success: (data) => {
        this.isLoading = false
        this.vlans = data.list
      },
      error: (data) => {
        this.isLoading = false
      }
    })
  }

  @action setSearchDatas(formData) {
    this.searchDatas = formData
  }

  toJS() {
    return this.vlans.map(vlan => vlan)
  }

  static fromJS(array = []) {
    return new VlanStore()
  }
}

