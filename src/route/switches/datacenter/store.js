import {
  observable, computed, action
} from 'mobx'

import Fetch from 'Fetch'
import Api from 'Api'
import 'Arr'
import Store from '../../../stores/Store'

export default class DatacenterStore extends Store {
  constructor(props) {
    super(props)
  }
  api = {
    gets: Api.getDatacenters,
    delete: Api.deleteDatacenter,
    post: Api.postDatacenter,
    uploadCsvData: Api.uploadCsvData,
    put: Api.putDatacenter,
    puts: Api.putDatacenters,
  }
  static fromJS(array = []) {
    return new DatacenterStore()
  }
}

