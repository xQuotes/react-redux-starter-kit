import {
  observable, computed, action
} from 'mobx'

import Fetch from 'Fetch'
import Api from 'Api'
import 'Arr'
import Store from '../../../stores/Store'

export default class CabinetmessageStore extends Store {
  constructor(props) {
    super(props)
  }
  api = {
    gets: Api.getCabinetmessages,
    delete: Api.deleteCabinetmessage,
    post: Api.postCabinetmessage,
    put: Api.putCabinetmessage,
    puts: Api.putCabinetmessages,
  }
  static fromJS(array = []) {
    return new CabinetmessageStore()
  }
}

