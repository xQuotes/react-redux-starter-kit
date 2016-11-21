import {
  observable, computed, action
} from 'mobx'

import Fetch from 'Fetch'
import Api from 'Api'
import 'Arr'
import Store from '../../../stores/Store'

export default class LogStore extends Store {
  constructor(props) {
    super(props)
  }
  api = {
    gets: Api.getLogs,
    delete: Api.deleteLog,
    post: Api.postLog,
    put: Api.putLog,
    puts: Api.putLogs,
  }
  static fromJS(array = []) {
    return new LogStore()
  }
}

