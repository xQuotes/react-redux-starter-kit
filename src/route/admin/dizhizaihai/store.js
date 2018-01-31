import { observable, computed, action } from 'mobx'

import Fetch from 'Fetch'
import Api from 'Api'
import 'Arr'
import Store from '../../../stores/Store'
import MapModel from './model'

export default class DizhizaihaiStore extends Store {
  constructor(props) {
    super(props)
  }
  fields = {
    // id: '造价指标id',
    label: '名字',
    id: '值'
  }
  // updateFields = _.omit(this.fields, ['id', 'updateTime'])
  // searchFields = _.omit(this.fields, ['id', 'updateTime'])

  @observable list = MapModel

  api = {
    gets: Api.getDizhizaihais,
    delete: Api.deleteDizhizaihai,
    post: Api.postDizhizaihai,
    uploadCsvData: Api.uploadCsvData,
    put: Api.putDizhizaihai,
    puts: Api.putDizhizaihais,
    exports: Api.exports
  }
  static fromJS(array = []) {
    return new DizhizaihaiStore()
  }
}
