import {
  observable, computed, action
} from 'mobx'

import Fetch from 'Fetch'
import Api from 'Api'
import 'Arr'
import Store from '../../../stores/Store'

export default class NetworkmanageStore extends Store {
  constructor(props) {
    super(props)
  }
  api = {
    gets: Api.getNetworkmanages,
    delete: Api.deleteNetworkmanage,
    post: Api.postNetworkmanage,
    put: Api.putNetworkmanage,
    puts: Api.putNetworkmanages,
  }
  static fromJS(array = []) {
    return new NetworkmanageStore()
  }
}

