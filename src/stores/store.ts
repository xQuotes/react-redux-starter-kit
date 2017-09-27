import { action } from 'mobx'

interface store {
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

export default class Store implements store {
  api = {
    gets: '',
    get: '',
    post: '',
    put: '',
    delete: ''
  }
  @action
  getServers(formData = {}, params = {}) {}
  @action
  getServer(formData = {}, params = {}) {}
  @action
  postServer(formData = {}, params = {}) {}
  @action
  putServer(formData = {}, params = {}) {}
  @action
  deleteServer(formData = {}, params = {}) {}
}
