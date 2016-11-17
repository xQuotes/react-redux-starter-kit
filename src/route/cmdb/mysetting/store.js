import {
  observable, computed, action
} from 'mobx'

import Fetch from 'Fetch'
import Api from 'Api'
import 'Arr'
import Store from '../../../stores/Store'

export default class MysettingStore extends Store {
  constructor(props) {
    super(props)
  }
  api = {
    gets: Api.getMysettings,
    delete: Api.deleteMysetting,
    post: Api.postMysetting,
    put: Api.putMysetting,
    puts: Api.putMysettings,
  }
  static fromJS(array = []) {
    return new MysettingStore()
  }
}

