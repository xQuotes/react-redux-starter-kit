import {
  observable, computed, action
} from 'mobx'

import Fetch from 'Fetch'
import Api from 'Api'

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
    console.log(formData)
    console.log(this.mappings)
    // Fetch({
    //   url: Api.deleteMapping,
    //   data: {
    //     id: formData.id
    //   },
    //   method: 'post',
    //   success: (data) => {
    //     this.isLoading = false
    //     console.log(this.toJS())
    //     
    //   },
    //   error: (data) => {
    //     this.isLoading = false
    //   }
    // })
  }

  toJS() {
    return this.mappings.map(mapping => mapping)
  }

  static fromJS(array = []) {
    return new MappingStore()
  }
}

