import { action } from 'mobx'

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
  }
  @action
  getServer(formData: object = {}, params: object = {}) {
    // console.log(formData, params)
  }
  @action
  postServer(formData: object = {}, params: object = {}) {
    // console.log(formData, params)
  }
  @action
  putServer(formData: object = {}, params: object = {}) {
    // console.log(formData, params)
  }
  @action
  deleteServer(formData: object = {}, params: object = {}) {
    // console.log(formData, params)
  }
}
