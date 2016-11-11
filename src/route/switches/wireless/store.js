import {
  observable, computed, action
} from 'mobx'

import Fetch from 'Fetch'
import Api from 'Api'
import 'Arr'
import Store from '../../../stores/Store'

export default class WirelessStore extends Store {
  constructor(props) {
    super(props)
  }
  api = {
    gets: Api.getWirelesss,
    delete: Api.deleteWireless,
    post: Api.postWireless,
    uploadCsvData: Api.uploadCsvData,
    put: Api.putWireless,
    puts: Api.putWirelesss,
  }
  static fromJS(array = []) {
    return new WirelessStore()
  }
}

