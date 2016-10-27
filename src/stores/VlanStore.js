import {
  observable, computed, action
} from 'mobx'

import Fetch from 'Fetch'
import Api from 'Api'

export default class VlanStore {
  @observable isLoading = false
  @observable vlans = []
  @observable file = ''
  searchDatas = {}

  @action getVlansServer(formData) {
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

  @action getVlanServer(formData) {
    this.isLoading = true
    Fetch({
      url: Api.getVlan,
      data: formData,
      method: 'post',
      success: (data) => {
        this.isLoading = false
        this.file = data
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

