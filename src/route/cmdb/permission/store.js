import {
  observable, computed, action
} from 'mobx'

import Fetch from '../../../common/utils/fetch'
import Api from '../../../api/'
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

