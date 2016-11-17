import {
  observable, computed, action
} from 'mobx'

import Fetch from 'Fetch'
import Api from 'Api'
import 'Arr'
import Store from '../../../stores/Store'

export default class QuicksearchStore extends Store {
  constructor(props) {
    super(props)
  }
  api = {
    gets: Api.getQuicksearchs,
    delete: Api.deleteQuicksearch,
    post: Api.postQuicksearch,
    put: Api.putQuicksearch,
    puts: Api.putQuicksearchs,
  }
  static fromJS(array = []) {
    return new QuicksearchStore()
  }
}

