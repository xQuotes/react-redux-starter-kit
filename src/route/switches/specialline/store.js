import {
  observable, computed, action
} from 'mobx'

import Fetch from 'Fetch'
import Api from 'Api'
import 'Arr'
import Store from '../../../stores/Store'

export default class SpeciallineStore extends Store {
  constructor(props) {
    super(props)
  }
  api = {
    gets: Api.getSpeciallines,
    delete: Api.deleteSpecialline,
    post: Api.postSpecialline,
    uploadCsvData: Api.uploadCsvData,
    put: Api.putSpecialline,
    puts: Api.putSpeciallines,
  }
  static fromJS(array = []) {
    return new SpeciallineStore()
  }
}

