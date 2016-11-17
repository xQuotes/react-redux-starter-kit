import {
  observable, computed, action
} from 'mobx'

import Fetch from 'Fetch'
import Api from 'Api'
import 'Arr'
import Store from '../../../stores/Store'

export default class ConnectionStore extends Store {
  constructor(props) {
    super(props)
  }
  api = {
    gets: Api.getConnections,
    delete: Api.deleteConnection,
    post: Api.postConnection,
    put: Api.putConnection,
    puts: Api.putConnections,
  }
  static fromJS(array = []) {
    return new ConnectionStore()
  }
}

