import {
  observable, computed, action
} from 'mobx'

import Fetch from '../../../common/utils/fetch'
import Api from '../../../api/'
import Store from '../../../stores/Store'

export default class TableStore extends Store {
  constructor(props) {
    super(props)
  }
  api = {
    gets: Api.getTables,
    delete: Api.deleteTable,
    post: Api.postTable,
    put: Api.putTable,
    puts: Api.putTables,
  }
  static fromJS(array = []) {
    return new TableStore()
  }
}

