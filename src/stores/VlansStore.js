import {
  observable, computed, action
} from 'mobx'

import Fetch from 'Fetch'
import Api from 'Api'

import Store from './Store'

export default class BackupStore {
  @observable isLoading = false
  @observable vlans = []

  @action getBackupsServer(formData) {
    this.isLoading = true
    Fetch({
      url: Api.getBackups,
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

  @action getBackupServer(formData) {
    this.isLoading = true
    Fetch({
      url: Api.getBackup,
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

  toJS() {
    return this.backups.map(backup => backup)
  }

  static fromJS(array = []) {
    return new BackupStore()
  }
}

