import { observable, computed, action } from 'mobx'

import Fetch from 'Fetch'
import Api from 'Api'
import 'Arr'
import Store from '../../../stores/Store'

export default class CaculatorStore extends Store {
  constructor(props) {
    super(props)
  }
  api = {
    gets: Api.getCaculators,
    delete: Api.deleteCaculator,
    post: Api.postCaculator,
    uploadCsvData: Api.uploadCsvData,
    put: Api.putCaculator,
    puts: Api.putCaculators,
    exports: Api.exports
  }
  static fromJS(array = []) {
    return new CaculatorStore()
  }
}
