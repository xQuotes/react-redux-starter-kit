import {
  observable, computed, action
} from 'mobx'

import Fetch from 'Fetch'
import Api from 'Api'
import 'Arr'
import Store from '../../../stores/Store'

export default class ProductionStore extends Store {
  constructor(props) {
    super(props)
  }
  api = {
    gets: Api.getProductions,
    delete: Api.deleteProduction,
    post: Api.postProduction,
    put: Api.putProduction,
    puts: Api.putProductions,
  }
  static fromJS(array = []) {
    return new ProductionStore()
  }
}

