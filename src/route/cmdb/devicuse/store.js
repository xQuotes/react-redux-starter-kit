import {
  observable, computed, action
} from 'mobx'

import Fetch from 'Fetch'
import Api from 'Api'
import 'Arr'
import Store from '../../../stores/Store'

export default class DevicuseStore extends Store {
  constructor(props) {
    super(props)
  }
  api = {
    gets: Api.getDevicuses,
    delete: Api.deleteDevicuse,
    post: Api.postDevicuse,
    put: Api.putDevicuse,
    puts: Api.putDevicuses,
  }
  static fromJS(array = []) {
    return new DevicuseStore()
  }
}

