import {
  observable
} from 'mobx'

export default class Store {
  @observable isLoading = false
  
  constructor(isLoading) {
    this.isLoading = isLoading
  }
}