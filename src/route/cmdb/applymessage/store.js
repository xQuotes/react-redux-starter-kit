import {
  observable, computed, action
} from 'mobx'

import Fetch from 'Fetch'
import Api from 'Api'
import 'Arr'
import Store from '../../../stores/Store'

export default class ApplymessageStore extends Store {
  constructor(props) {
    super(props)
  }
  api = {
    gets: Api.getApplymessages,
    delete: Api.deleteApplymessage,
    post: Api.postApplymessage,
    put: Api.putApplymessage,
    puts: Api.putApplymessages,
  }
  static fromJS(array = []) {
    return new ApplymessageStore()
  }
}

