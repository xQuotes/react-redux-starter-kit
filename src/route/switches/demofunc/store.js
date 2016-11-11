import {
  observable, computed, action
} from 'mobx'

import Fetch from 'Fetch'
import Api from 'Api'
import 'Arr'
import Store from '../../../stores/Store'

export default class /*File_append*/Store extends Store {
  constructor(props) {
    super(props)
  }
  api = {
    gets: Api.get/*File_append*/s,
    delete: Api.delete/*File_append*/,
    post: Api.post/*File_append*/,
    uploadCsvData: Api.uploadCsvData,
    put: Api.put/*File_append*/,
    puts: Api.put/*File_append*/s,
  }
  static fromJS(array = []) {
    return new /*File_append*/Store()
  }
}

