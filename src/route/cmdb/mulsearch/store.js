import {
  observable, computed, action
} from 'mobx'

import Fetch from 'Fetch'
import Api from 'Api'
import 'Arr'
import Store from '../../../stores/Store'

export default class MulsearchStore extends Store {
  constructor(props) {
    super(props)
  }
  api = {
    gets: Api.getMulsearchs,
    delete: Api.deleteMulsearch,
    post: Api.postMulsearch,
    put: Api.putMulsearch,
    puts: Api.putMulsearchs,
  }
  static fromJS(array = []) {
    return new MulsearchStore()
  }
}

