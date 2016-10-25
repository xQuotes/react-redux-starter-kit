import {
  observable, computed, reaction, action
} from 'mobx'

import Api from 'Api'
import Fetch from 'Fetch'

import Store from './Store'

export default class DashboardStore {
  @observable isLoading = false
  @observable bcData = []
  
  static fromJS() {
    return new DashboardStore()
  }
}