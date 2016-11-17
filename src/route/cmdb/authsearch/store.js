import {
  observable, computed, action
} from 'mobx'

import Fetch from 'Fetch'
import Api from 'Api'
import 'Arr'
import Store from '../../../stores/Store'

export default class AuthsearchStore extends Store {
  constructor(props) {
    super(props)
  }
  api = {
    gets: Api.getAuthsearchs,
    delete: Api.deleteAuthsearch,
    post: Api.postAuthsearch,
    put: Api.putAuthsearch,
    puts: Api.putAuthsearchs,
  }
  static fromJS(array = []) {
    return new AuthsearchStore()
  }
}

