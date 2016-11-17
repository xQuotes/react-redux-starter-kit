import {
  observable, computed, action
} from 'mobx'

import Fetch from 'Fetch'
import Api from 'Api'
import 'Arr'
import Store from '../../../stores/Store'

export default class IdcmessageStore extends Store {
  constructor(props) {
    super(props)
  }
  api = {
    gets: Api.getIdcmessages,
    delete: Api.deleteIdcmessage,
    post: Api.postIdcmessage,
    put: Api.putIdcmessage,
    puts: Api.putIdcmessages,
  }
  static fromJS(array = []) {
    return new IdcmessageStore()
  }
}

