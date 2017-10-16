import { observable, computed, action } from 'mobx'

import Fetch from 'Fetch'
import Api from 'Api'
import 'Arr'
import Store from '../../../stores/Store'

export default class NewsStore extends Store {
  constructor(props) {
    super(props)
  }
  api = {
    gets: Api.getNewss,
    delete: Api.deleteNews,
    post: Api.postNews,
    uploadCsvData: Api.uploadCsvData,
    put: Api.putNews,
    puts: Api.putNewss,
    exports: Api.exports
  }
  static fromJS(array = []) {
    return new NewsStore()
  }
}
