import {
  observable, computed, action
} from 'mobx'

import Fetch from 'Fetch'
import Api from 'Api'
import 'Arr'
import Store from '../../../stores/Store'

export default class VpnStore extends Store {
  constructor(props) {
    super(props)
  }
  api = {
    gets: Api.getVpns,
    delete: Api.deleteVpn,
    post: Api.postVpn,
    uploadCsvData: Api.uploadCsvData,
    put: Api.putVpn,
    puts: Api.putVpns,
  }
  static fromJS(array = []) {
    return new VpnStore()
  }
}

