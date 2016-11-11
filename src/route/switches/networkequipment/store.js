import {
  observable, computed, action
} from 'mobx'

import Fetch from 'Fetch'
import Api from 'Api'
import 'Arr'
import Store from '../../../stores/Store'

export default class NetworkequipmentStore extends Store {
  constructor(props) {
    super(props)
  }
  api = {
    gets: Api.getNetworkequipments,
    delete: Api.deleteNetworkequipment,
    post: Api.postNetworkequipment,
    uploadCsvData: Api.uploadCsvData,
    put: Api.putNetworkequipment,
    puts: Api.putNetworkequipments,
  }
  static fromJS(array = []) {
    return new NetworkequipmentStore()
  }
}

