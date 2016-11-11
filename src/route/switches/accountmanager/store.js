import {
  observable, computed, action
} from 'mobx'

import Fetch from 'Fetch'
import Api from 'Api'
import 'Arr'
import Store from '../../../stores/Store'

export default class AccountmanagerStore extends Store {
  constructor(props) {
    super(props)
  }
  api = {
    gets: Api.getAccountmanagers,
    delete: Api.deleteAccountmanager,
    post: Api.postAccountmanager,
    uploadCsvData: Api.uploadCsvData,
    put: Api.putAccountmanager,
    puts: Api.putAccountmanagers,
  }
  static fromJS(array = []) {
    return new AccountmanagerStore()
  }
}

