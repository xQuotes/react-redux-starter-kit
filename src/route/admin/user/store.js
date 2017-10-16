import { observable, computed, action } from 'mobx'

import Fetch from 'Fetch'
import Api from 'Api'
import 'Arr'
import Store from '../../../stores/Store'

export default class UserStore extends Store {
  constructor(props) {
    super(props)
  }
  api = {
    gets: Api.getUsers,
    delete: Api.deleteUser,
    post: Api.postUser,
    uploadCsvData: Api.uploadCsvData,
    put: Api.putUser,
    puts: Api.putUsers,
    exports: Api.exports
  }
  static fromJS(array = []) {
    return new UserStore()
  }
}
