import {
  observable, computed, action
} from 'mobx'

import Fetch from 'Fetch'
import Api from 'Api'

export default class BackupStore {
  @observable isLoading = false
  @observable backups = []
  @observable file = ''
  searchDatas = {}

  @action getServers(formData) {
    this.isLoading = true

    // DatePicker 插件获取数据格式 为 moment
    formData['day'] = formData['day'] && formData['day'].format('YYYY-MM-DD')

    this.setSearchDatas(formData)
    
    Fetch({
      url: Api.getBackups,
      contentType: 'application/x-www-form-urlencoded',
      data: formData,
      method: 'post',
      success: (data) => {
        this.isLoading = false
        this.backups = data.list
      },
      error: (data) => {
        this.isLoading = false
      }
    })
  }

  @action getServer(formData) {
    this.isLoading = true
    Fetch({
      url: Api.getBackup,
      contentType: 'application/x-www-form-urlencoded',
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
    return this.backups.map(backup => backup)
  }

  static fromJS(array = []) {
    return new BackupStore()
  }
}

