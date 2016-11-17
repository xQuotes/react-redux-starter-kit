import {
  observable, computed, action
} from 'mobx'

import Fetch from 'Fetch'
import Api from 'Api'
import 'Arr'
import Store from '../../../stores/Store'

export default class SpaceshowStore extends Store {
  constructor(props) {
    super(props)
  }
  api = {
    gets: Api.getSpaceshows,
    delete: Api.deleteSpaceshow,
    post: Api.postSpaceshow,
    put: Api.putSpaceshow,
    puts: Api.putSpaceshows,
  }
  static fromJS(array = []) {
    return new SpaceshowStore()
  }
}

