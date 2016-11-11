import {
  observable, computed, action
} from 'mobx'

import Fetch from 'Fetch'
import Api from 'Api'
import 'Arr'
import Store from '../../../stores/Store'

export default class NetworksubStore extends Store {
  constructor(props) {
    super(props)
  }
  api = {
    gets: Api.getNetworksubs,
    delete: Api.deleteNetworksub,
    post: Api.postNetworksub,
    uploadCsvData: Api.uploadCsvData,
    put: Api.putNetworksub,
    puts: Api.putNetworksubs,
  }
  static fromJS(array = []) {
    return new NetworksubStore()
  }
}

