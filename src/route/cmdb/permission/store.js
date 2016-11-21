import {
  observable, computed, action
} from 'mobx'

import Fetch from 'Fetch'
import Api from 'Api'
import 'Arr'
import Store from '../../../stores/Store'

export default class PermissionStore extends Store {
  constructor(props) {
    super(props)
  }
  api = {
    gets: Api.getPermissions,
    delete: Api.deletePermission,
    post: Api.postPermission,
    put: Api.putPermission,
    puts: Api.putPermissions,
  }
  static fromJS(array = []) {
    return new PermissionStore()
  }
}

