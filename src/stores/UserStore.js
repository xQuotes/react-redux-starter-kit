import {
  observable, computed, reaction, action
} from 'mobx'

import Api from 'Api'
import Fetch from 'Fetch'

export default class UserStore {
  @observable user = {}
  @observable isLoading = false

  loginServer(formData) {
    this.isLoading = true
    Fetch({
      url: Api.login,
      data: formData,
      success: (data) => {
        this.isLoading = false
        this.user = data
      },
      error: (data) => {
        this.isLoading = false
        this.user = data
      }
    })
  }
  
  registerServer(formData) {
    this.isLoading = true
    Fetch({
      url: Api.register,
      data: formData,
      success: (data) => {
        this.isLoading = false
        this.user = data
      },
      error: (data) => {
        this.isLoading = false
        this.user = data
      }
    })
  }
  static fromJS() {
    const userStore = new UserStore()
    return userStore
  }

}