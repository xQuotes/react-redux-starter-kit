import {
  observable, computed, action
} from 'mobx'

import Fetch from 'Fetch'
import Api from 'Api'
import 'Arr'
import Store from '../../../stores/Store'

export default class ServermessageStore extends Store {
  constructor(props) {
    super(props)
  }
  api = {
    gets: Api.getServermessages,
    delete: Api.deleteServermessage,
    post: Api.postServermessage,
    put: Api.putServermessage,
    puts: Api.putServermessages,
  }
  static fromJS(array = []) {
    return new ServermessageStore()
  }
}

