import { action, observable, useStrict } from 'mobx'
import promise from '../common/fetch'

useStrict(true)

interface Api {
  gets: string
  get: string
  post: string
  put: string
  delete: string
  [propName: string]: string
}
interface FormData {}
interface Params {
  readonly id: number
  [propName: string]: any
}

interface Item {
  readonly id: number
  [propName: string]: any
}
interface Func {
  (formData: FormData, params: Params): void
}

interface store {
  api: Api
  getServers: Func
  getServer: Func
  putServer: Func
  postServer: Func
  deleteServer: Func
}

export default class Store implements store {
  api = {
    gets: '',
    get: '',
    post: '',
    put: '',
    delete: ''
  }

  @observable public item: Item
  @observable public list: Array<Item>

  @action
  getServers(formData: FormData, params: Params) {
    return promise({
      url: this.api.gets
    }).then(data => {
      this.list = data
    })
  }
  @action
  getServer(formData: FormData, params: Params) {
    return promise({
      url: this.api.get
    }).then(data => {
      this.item = data
    })
  }
  @action
  postServer(formData: FormData, params: Params) {
    return promise({
      url: this.api.post
    }).then(data => {
      this.item = data
    })
  }
  @action
  putServer(formData: FormData, params: Params) {
    return promise({
      url: `${this.api.put}/${params.id}`
    }).then(data => {
      // const index = this.list.findIndex((item, key, arr) => {
      //   if (item.id === params.id) {
      //     return item
      //   }
      // })
    })
  }
  @action
  deleteServer(formData: FormData, params: Params) {
    return promise({
      url: `${this.api.delete}/${params.id}`
    }).then(data => {
      this.list = this.list.filter(item => item.id !== params.id)
    })
  }
}
