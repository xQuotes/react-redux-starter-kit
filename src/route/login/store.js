import {
  observable, computed, reaction, action
} from 'mobx'

import Api from '../../api/'
import Fetch from '../../common/utils/fetch'

export default class UserStore {
  @observable name = ''
  @observable usr = ''
  @observable isLoading = false

  @action getMeServer(formData) {
    this.isLoading = true
    Fetch({
      url: Api.getMe,
      data: formData,
      success: (data) => {
        this.isLoading = false
        this.name = data.name
        this.usr = data.usr
      },
      error: (data) => {
        this.isLoading = false
      }
    })
  }
  
  @action logoutServer(formData) {
    this.isLoading = true
    Fetch({
      url: Api.logout,
      data: formData,
      success: (data) => {
        this.isLoading = false
      },
      error: (data) => {
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