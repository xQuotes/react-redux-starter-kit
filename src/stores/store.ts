import { action } from 'mobx'

import Fetch from '../common/fetch'

interface Model {
  api: {
    gets: string
    get: string
    post: string
    put: string
    delete: string
  }
  getServers(): void
  getServer(): void
  putServer(): void
  postServer(): void
  deleteServer(): void
}

export default class Store implements Model {
  api = {
    gets: '',
    get: '',
    post: '',
    put: '',
    delete: ''
  }
  @action
  getServers(formData: object = {}, params: object = {}) {
    // console.log(formData, params)
    return Fetch({
      url: this.api.gets,
      data: formData,
      method: 'get'
    })
  }
  @action
  getServer(formData: object = {}, params: object = {}) {
    // console.log(formData, params)
    return Fetch({
      url: this.api.get,
      data: formData,
      method: 'get'
    })
  }
  @action
  postServer(formData: object = {}, params: object = {}) {
    // console.log(formData, params)
    return Fetch({
      url: this.api.post,
      data: formData,
      method: 'post'
    })
  }
  @action
  putServer(formData: object = {}, params: object = {}) {
    // console.log(formData, params)
    return Fetch({
      url: this.api.put,
      data: formData,
      method: 'put'
    })
  }
  @action
  deleteServer(formData: object = {}, params: object = {}) {
    // console.log(formData, params)
    return Fetch({
      url: this.api.delete,
      data: formData,
      method: 'delete'
    })
  }
}
