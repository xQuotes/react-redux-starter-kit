import {
  observable, computed, action
} from 'mobx'

import Fetch from 'Fetch'
import Api from 'Api'
import 'Arr'

export default class MappingStore {
  @observable isLoading = false
  @observable mappings = []
  searchDatas = {}

  @action getServers(formData) {
    this.isLoading = true
    this.setSearchDatas(formData)
    
    Fetch({
      url: Api.getMappings,
      data: formData,
      method: 'post',
      success: (data) => {
        this.isLoading = false
        this.mappings = data.list
      },
      error: (data) => {
        this.isLoading = false
      }
    })
  }

  @action setSearchDatas(formData) {
    this.searchDatas = formData
  }

  @action deleteServer(formData) {
    this.isLoading = true
    Fetch({
      url: Api.deleteMapping,
      data: {
        id: formData.id
      },
      method: 'post',
      success: (data) => {
        this.isLoading = false
        this.mappings = this.mappings.delete(formData.index)
      },
      error: (data) => {
        this.isLoading = false
      }
    })
  }

  toJS() {
    return this.mappings.map(mapping => mapping)
  }

  static fromJS(array = []) {
    return new MappingStore()
  }
}

