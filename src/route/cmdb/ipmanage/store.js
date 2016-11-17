import {
  observable, computed, action
} from 'mobx'

import Fetch from 'Fetch'
import Api from 'Api'
import 'Arr'
import Store from '../../../stores/Store'

export default class IPmanageStore extends Store {
  constructor(props) {
    super(props)
  }
  api = {
    gets: Api.getIPmanages,
    delete: Api.deleteIPmanage,
    post: Api.postIPmanage,
    put: Api.putIPmanage,
    puts: Api.putIPmanages,
  }
  static fromJS(array = []) {
    return new IPmanageStore()
  }
}

