import {
  observable, computed, action
} from 'mobx'

import Fetch from 'Fetch'
import Api from 'Api'
import 'Arr'
import Store from '../../../stores/Store'

export default class NetworksecStore extends Store {
  constructor(props) {
    super(props)
  }
  api = {
    gets: Api.getNetworksecs,
    delete: Api.deleteNetworksec,
    post: Api.postNetworksec,
    uploadCsvData: Api.uploadCsvData,
    put: Api.putNetworksec,
    puts: Api.putNetworksecs,
  }
  static fromJS(array = []) {
    return new NetworksecStore()
  }
}

