import {
  observable, computed, action
} from 'mobx'

import Fetch from 'Fetch'
import Api from 'Api'
import 'Arr'
import Store from '../../../stores/Store'

export default class ServerStore extends Store {
  constructor(props) {
    super(props)
  }
  api = {
    gets: Api.getServers,
    delete: Api.deleteServer,
    post: Api.postServer,
    uploadCsvData: Api.uploadCsvData,
    put: Api.putServer,
    puts: Api.putServers,
  }
  static fromJS(array = []) {
    return new ServerStore()
  }
}

