import {
  observable, computed, action
} from 'mobx'

import Fetch from 'Fetch'
import Api from 'Api'
import 'Arr'
import Store from '../../../stores/Store'

export default class SoftwarepackageStore extends Store {
  constructor(props) {
    super(props)
  }
  api = {
    gets: Api.getSoftwarepackages,
    delete: Api.deleteSoftwarepackage,
    post: Api.postSoftwarepackage,
    put: Api.putSoftwarepackage,
    puts: Api.putSoftwarepackages,
  }
  static fromJS(array = []) {
    return new SoftwarepackageStore()
  }
}

