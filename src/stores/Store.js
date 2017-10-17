import { observable, computed, action } from 'mobx'

import Fetch from 'Fetch'
import Api from 'Api'
import { errorAlert } from 'Utils'
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
  @observable exportUrl = ''
  api = {
    gets: '',
    delete: '',
    post: '',
    uploadCsvData: Api.uploadCsvData,
    put: '',
    puts: '',
    exports: Api.exportsCSV
  }

  @action
  setSearchDatas(formData = {}, params = {}) {
    this.searchDatas = formData
  }

  @action
  getServers(formData = {}, params = {}) {
    this.isLoading = true
    this.setSearchDatas(formData, params)

    Fetch({
      url: this.api.gets,
      data: formData,
      //JSON.stringify(formData),
      // contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      method: 'get',
      success: data => {
        this.isLoading = false
        this.list = data.databody
        // this.fields = data.fields
        // this.searchFields = data.search_fields
        // this.updateFields = data.update_fields
      },
      error: data => {
        errorAlert('服务器出错！')
        this.isLoading = false
      }
    })
  }

  @action
  deleteServer(formData = {}, params = {}) {
    this.isLoading = true
    Fetch({
      url: this.api.delete,
      data: JSON.stringify({
        conditions: {
          id: formData.id
        },
        params: params
      }),
      method: 'post',
      success: data => {
        this.isLoading = false
        this.list = this.list.deleteById(formData.id)
      },
      error: data => {
        errorAlert('服务器出错！')
        this.isLoading = false
      }
    })
  }

  // 保存单条
  @action
  postServer(formData = {}, params = {}) {
    formData['deadline'] &&
      (formData['deadline'] = formData['deadline'].format(
        'YYYY-MM-DD HH:mm:ss'
      ))
    this.isLoading = true
    Fetch({
      url: this.api.post,
      data: JSON.stringify({
        conditions: formData,
        params: params
      }),
      method: 'post',
      success: data => {
        this.isLoading = false
        this.list.push(data)
      },
      error: data => {
        errorAlert('服务器出错！')
        this.isLoading = false
      }
    })
  }

  // 保存多条
  @action
  postServers(formData = {}, params = {}) {
    this.isLoading = true
    Fetch({
      url: this.api.uploadCsvData,
      data: JSON.stringify({
        conditions: formData,
        params: params
      }),
      method: 'post',
      success: data => {
        this.isLoading = false
        this.list = data
      },
      error: data => {
        errorAlert('服务器出错！')
        this.isLoading = false
      }
    })
  }

  @action
  putServer(formData = {}, params = {}) {
    console.log(formData['deadline'])
    this.isLoading = true
    formData['deadline'] &&
      (formData['deadline'] = formData['deadline'].format(
        'YYYY-MM-DD HH:mm:ss'
      ))
    Fetch({
      url: this.api.put,
      data: JSON.stringify({
        conditions: formData,
        params: params
      }),
      method: 'post',
      success: data => {
        this.isLoading = false
        let index = this.list.getIndexById(data.id)
        this.list[index] = data
      },
      error: data => {
        errorAlert('服务器出错！')
        this.isLoading = false
      }
    })
  }

  @action
  putServers(formData = {}, params = {}) {
    this.isLoading = true
    Fetch({
      url: this.api.puts,
      data: JSON.stringify({
        conditions: formData,
        params: params
      }),
      method: 'post',
      success: data => {
        this.isLoading = false
        this.list = data
      },
      error: data => {
        errorAlert('服务器出错！')
        this.isLoading = false
      }
    })
  }

  @action
  exportServers(formData = {}, params = {}) {
    this.isLoading = true
    Fetch({
      url: this.api.exports,
      data: JSON.stringify({
        conditions: {
          list: this.list,
          fields: this.fields,
          file_type: 'xls',
          export_type: 'no_browser'
        },
        params: params
      }),
      method: 'post',
      success: data => {
        this.isLoading = false
        this.exportUrl = data.url
      },
      error: data => {
        errorAlert('服务器出错！')
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
