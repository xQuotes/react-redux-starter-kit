import { observable, computed, action } from 'mobx'

import Fetch from 'Fetch'
import Api from 'Api'
import 'Arr'
import Store from '../../../stores/Store'

export default class TableStore extends Store {
  constructor(props) {
    super(props)
  }
  api = {
    gets: Api.getTables,
    delete: Api.deleteTable,
    post: Api.postTable,
    uploadCsvData: Api.uploadCsvData,
    put: Api.putTable,
    puts: Api.putTables,
    exports: Api.exports
  }
  static fromJS(array = []) {
    return new TableStore()
  }
}
