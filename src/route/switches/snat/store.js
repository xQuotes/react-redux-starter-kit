import {
  observable, computed, action
} from 'mobx'

import Fetch from 'Fetch'
import Api from 'Api'
import 'Arr'
import Store from '../../../stores/Store'

export default class SnatStore extends Store {
  constructor(props) {
    super(props)
  }
  api = {
    gets: Api.getSnats,
    delete: Api.deleteSnat,
    post: Api.postSnat,
    uploadCsvData: Api.uploadCsvData,
    put: Api.putSnat,
    puts: Api.putSnats,
  }
  static fromJS(array = []) {
    return new SnatStore()
  }
}

