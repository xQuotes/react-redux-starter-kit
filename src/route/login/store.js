import { observable, computed, reaction, action } from 'mobx'

import Api from 'Api'
import Auth from 'Auth'
import Fetch from 'Fetch'

export default class UserStore {
  @observable name = ''
  @observable usr = ''
  @observable isLoading = false

  api = {
    login: Api.login
  }

  @action
  getMeServer(formData) {
    this.isLoading = true
    Fetch({
      url: Api.getMe,
      data: formData,
      success: data => {
        this.isLoading = false
        this.name = data.name
        this.usr = data.usr
      },
      error: data => {
        this.isLoading = false
      }
    })
  }

  @action
  login(formData = {}, params = {}) {
    this.isLoading = true

    Fetch({
      url: this.api.login,
      data: JSON.stringify({
        mobile: formData.mobile,
        password: formData.password
      }),
      method: 'post',
      success: data => {
        this.isLoading = false
        if (formData.remember) {
          Auth.remenber(data.databody)
        } else {
          Auth.login(data.databody)
        }
      },
      error: data => {
        errorAlert('服务器出错！')
        this.isLoading = false
      }
    })
  }

  @action
  logoutServer(formData) {
    this.isLoading = true
    Fetch({
      url: Api.logout,
      data: formData,
      success: data => {
        this.isLoading = false
      },
      error: data => {
        this.isLoading = false
      }
    })
  }

  toJS() {
    return {
      name: this.name,
      usr: this.usr
    }
  }

  static fromJS() {
    return new UserStore()
  }
}
