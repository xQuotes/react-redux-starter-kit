import { action, observable } from 'mobx'
import R from 'r2'

interface Api {
  gets: string
  get: string
  post: string
  put: string
  delete: string
  [propName: string]: string
}
interface FormData {}
interface Params {}
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

  @observable item: Item
  @observable list: Item[] // Array<Item>

  @action
  getServers(formData: FormData, params: Params) {}
  @action
  getServer(formData: FormData, params: Params) {}
  @action
  postServer(formData: FormData, params: Params) {}
  @action
  putServer(formData: FormData, params: Params) {}
  @action
  deleteServer(formData: FormData, params: Params) {}
}
