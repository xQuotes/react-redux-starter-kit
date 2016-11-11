import {
  observable, computed, action
} from 'mobx'

import Fetch from 'Fetch'
import Api from 'Api'
import 'Arr'
import Store from '../../../stores/Store'

export default class MappingStore extends Store {
  constructor(props) {
    super(props)
  }
  api = {
    gets: Api.getMappings,
    delete: Api.deleteMapping,
    post: Api.postMapping,
    uploadCsvData: Api.uploadCsvData,
    put: Api.putMapping,
    puts: Api.putMappings,
  }
  static fromJS(array = []) {
    return new MappingStore()
  }
}

