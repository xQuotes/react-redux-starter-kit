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

  @observable visible = false
  @observable params = {}

  @action setSearchDatas(formData) {
    this.searchDatas = formData
  }

  @action getServers(formData) {
    this.isLoading = true
    this.setSearchDatas(formData)
    
    Fetch({
      url: Api.getMappings,
      data: {
        conditions: formData,
        params: {}
      },
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

  @action deleteServer(formData) {
    this.isLoading = true
    Fetch({
      url: Api.deleteMapping,
      data: {
        conditions: {
          id: formData.id
        },
        params: {}
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

  @action postServer(formData) {
    this.isLoading = true
    Fetch({
      url: Api.postMapping,
      data: {
        conditions: formData,
        params: {}
      },
      method: 'post',
      success: (data) => {
        this.isLoading = false
        console.log(data)
        this.mappings = this.mappings.push(formData)
      },
      error: (data) => {
        this.isLoading = false
      }
    })
  }

  @action putServer(formData) {
    this.isLoading = true
    Fetch({
      url: Api.putMapping,
      data: {
        conditions: formData,
        params: {}
      },
      method: 'post',
      success: (data) => {
        this.isLoading = false
        console.log(data)
        console.log(data.getById(formData.id))
        this.mappings = this.mappings.update(update, data.getById(formData.id))
      },
      error: (data) => {
        this.isLoading = false
      }
    })
  }

  toggleVisible() {
    this.visible = !this.visible
  }

  setParams(formData) {
    this.params = formData
  }

  toJS() {
    return this.mappings.map(mapping => mapping)
  }

  static fromJS(array = []) {
    return new MappingStore()
  }
}

