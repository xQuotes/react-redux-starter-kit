import {
  observable, computed, action
} from 'mobx'

import Fetch from 'Fetch'
import Api from 'Api'
import 'Arr'
import Store from '../../../stores/Store'

export default class DnatStore extends Store {
  constructor(props) {
    super(props)
  }
  api = {
    gets: Api.getDnats,
    delete: Api.deleteDnat,
    post: Api.postDnat,
    uploadCsvData: Api.uploadCsvData,
    put: Api.putDnat,
    puts: Api.putDnats,
  }
  static fromJS(array = []) {
    return new DnatStore()
  }
}

