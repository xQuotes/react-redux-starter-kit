import {
  observable, computed, action
} from 'mobx'

import Fetch from 'Fetch'
import Api from 'Api'
import 'Arr'
import Store from '../../../stores/Store'

export default class DbStore extends Store {
  constructor(props) {
    super(props)
  }
  api = {
    gets: Api.getDbs,
    delete: Api.deleteDb,
    post: Api.postDb,
    put: Api.putDb,
    puts: Api.putDbs,
  }
  static fromJS(array = []) {
    return new DbStore()
  }
}

