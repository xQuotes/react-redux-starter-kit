import { observable } from 'mobx'

import Store from '../../stores/store'
// import Fetch from '../../common/fetch'
import Api from '../../common/api'

import dataSource from './const'

export default class CaculatorStore extends Store {
  @observable list = dataSource.list.databody
  @observable item = dataSource.item.databody
  @observable itemType = 0
  @observable presetValue = {}
  @observable presetVisible = false

  api = {
    gets: Api.getCaculators,
    get: Api.getCaculator,
    post: '',
    put: '',
    delete: ''
  }
}
