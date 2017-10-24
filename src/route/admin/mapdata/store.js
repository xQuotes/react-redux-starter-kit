import { observable, computed, action } from 'mobx'

import Fetch from 'Fetch'
import Api from 'Api'
import 'Arr'
import Store from '../../../stores/Store'
import MapModel from './model'

export default class MapdataStore extends Store {
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
    gets: Api.getMapdatas,
    delete: Api.deleteMapdata,
    post: Api.postMapdata,
    uploadCsvData: Api.uploadCsvData,
    put: Api.putMapdata,
    puts: Api.putMapdatas,
    exports: Api.exports
  }
  static fromJS(array = []) {
    return new MapdataStore()
  }
}
