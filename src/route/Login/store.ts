import { action } from 'mobx'

import Store from '../../stores/store'
import Fetch from '../../common/fetch'
import Api from '../../common/api'

export default class CaculatorStore extends Store {
  api = {
    gets: '',
    getCode: Api.getCode,
    register: Api.register,
    login: Api.login,
    get: '',
    post: '',
    put: '',
    delete: ''
  }

  @action getCode(formData: {
    mobile: string
  }) {
    return Fetch({
      url: this.api.getCode,
      data: formData,
      method: 'post'
    }).then(data => {
      console.log(data)
    })
  }

  @action register(formData: any) {
    return Fetch({
      url: this.api.register,
      data: {
        mobile: formData.mobile,
        nickname: formData.nickname,
        password: formData.password,
        smscode: formData.smscode,
        source: 2,
        token: sessionStorage.jisuanqi
      },
      method: 'post'
    }).then(data => {
      console.log(data)
    })
  }

  @action findPassword(formData: any) {
    return Fetch({
      url: this.api.register,
      data: {
        mobile: formData.mobile,
        newPassword: formData.password,
        smscode: formData.smscode,
        source: 2,
        token: sessionStorage.jisuanqi
      },
      method: 'post'
    }).then(data => {
      console.log(data)
    })
  }

  @action login(formData: any) {
    return Fetch({
      url: this.api.login,
      data: {
        mobile: formData.mobile,
        password: formData.password
      },
      method: 'post'
    }).then(data => {
      // remenber
      console.log(data)
    })
  }
}
