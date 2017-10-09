import { observable } from 'mobx'

import Store from '../../stores/store'
import Api from '../api'
import { UserModel } from './Model'

export default class UserStore extends Store {
  readonly id: number
  @observable public item: UserModel

  api = {
    gets: Api.getUsers,
    get: '',
    post: '',
    put: '',
    delete: ''
  }
}
