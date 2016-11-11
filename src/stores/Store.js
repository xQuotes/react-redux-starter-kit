import {
  observable, computed, action
} from 'mobx'

import Fetch from 'Fetch'
import 'Arr'

export default class Store {
  @observable isLoading = false
  @observable list = []
  @observable fields = {}
  @observable updateFields = {}
  @observable searchFields = {}

  @observable searchDatas = {}

  @observable visible = false
  @observable params = {}
  @observable Api = {
    gets: '',
    delete: '',
    post: '',
    uploadCsvData: '',
    put: '',
    puts: '',
  }

  @action setSearchDatas(formData={}, params={}) {
    this.searchDatas = formData
  }

  @action getServers(formData={}, params={}) {
    this.isLoading = true
    this.setSearchDatas(formData, params)
    
    Fetch({
      url: Api.gets,
      data: JSON.stringify({
        conditions: formData,
        params: params
      }),
      method: 'post',
      success: (data) => {
        this.isLoading = false
        this.list = data.list
        this.fields = data.fields
        this.searchFields = data.search_fields
        this.updateFields = data.update_fields
      },
      error: (data) => {
        this.isLoading = false
      }
    })
  }

  @action deleteServer(formData={}, params={}) {
    this.isLoading = true
    Fetch({
      url: Api.delete,
      data: JSON.stringify({
        conditions: {
          id: formData.id
        },
        params: params
      }),
      method: 'post',
      success: (data) => {
        this.isLoading = false
        this.list = this.list.deleteById(formData.id)
      },
      error: (data) => {
        this.isLoading = false
      }
    })
  }

  // 保存单条
  @action postServer(formData={}, params={}) {
    this.isLoading = true
    Fetch({
      url: Api.post,
      data: JSON.stringify({
        conditions: formData,
        params: params
      }),
      method: 'post',
      success: (data) => {
        this.isLoading = false
        this.list.push(data)
      },
      error: (data) => {
        this.isLoading = false
      }
    })
  }

  // 保存多条
  @action postServers(formData={}, params={}) {
    this.isLoading = true
    Fetch({
      url: Api.uploadCsvData,
      data: JSON.stringify({
        conditions: formData,
        params: params
      }),
      method: 'post',
      success: (data) => {
        this.isLoading = false
        this.list = data
      },
      error: (data) => {
        this.isLoading = false
      }
    })
  }

  @action putServer(formData={}, params={}) {
    this.isLoading = true
    Fetch({
      url: Api.put,
      data: JSON.stringify({
        conditions: formData,
        params: params
      }),
      method: 'post',
      success: (data) => {
        this.isLoading = false
        let index = this.list.getIndexById(data.id)
        this.list[index] = data
      },
      error: (data) => {
        this.isLoading = false
      }
    })
  }

  @action putServers(formData={}, params={}) {
    this.isLoading = true
    Fetch({
      url: Api.puts,
      data: JSON.stringify({
        conditions: formData,
        params: params
      }),
      method: 'post',
      success: (data) => {
        this.isLoading = false
        this.list = data
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
    return this.list.map(data => data)
  }
}

